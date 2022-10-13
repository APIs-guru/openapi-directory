from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import insightresultvalue


@dataclass_json
@dataclass
class InsightResults:
    group_by_attribute: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByAttribute' }})
    insight_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightArn' }})
    result_values: List[insightresultvalue.InsightResultValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResultValues' }})
    
