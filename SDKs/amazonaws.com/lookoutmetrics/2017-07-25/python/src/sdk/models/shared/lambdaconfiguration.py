from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaConfiguration:
    lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaArn' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
