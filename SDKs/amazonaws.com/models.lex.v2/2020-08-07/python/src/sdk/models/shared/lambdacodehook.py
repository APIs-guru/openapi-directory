from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LambdaCodeHook:
    code_hook_interface_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeHookInterfaceVersion' }})
    lambda_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaARN' }})
    
