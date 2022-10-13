from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InsightResultValue:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    group_by_attribute_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupByAttributeValue' }})
    
