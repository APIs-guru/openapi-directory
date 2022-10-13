from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppFlowConfig:
    flow_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
