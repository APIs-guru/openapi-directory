from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricfilter

class MetricFilterClauseOperatorEnum(str, Enum):
    OPERATOR_UNSPECIFIED = "OPERATOR_UNSPECIFIED"
    OR = "OR"
    AND = "AND"


@dataclass_json
@dataclass
class MetricFilterClause:
    filters: Optional[List[metricfilter.MetricFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    operator: Optional[MetricFilterClauseOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    
