from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetFunctionCodeSigningConfigResponse:
    code_signing_config_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSigningConfigArn' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    
