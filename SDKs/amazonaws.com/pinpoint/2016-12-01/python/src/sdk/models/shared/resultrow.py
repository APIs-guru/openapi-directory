from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import resultrowvalue
from . import resultrowvalue


@dataclass_json
@dataclass
class ResultRow:
    grouped_bys: List[resultrowvalue.ResultRowValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupedBys' }})
    values: List[resultrowvalue.ResultRowValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
