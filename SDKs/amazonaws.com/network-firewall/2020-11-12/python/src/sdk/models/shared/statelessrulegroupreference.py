from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StatelessRuleGroupReference:
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    resource_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    
