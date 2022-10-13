from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import lambdacodehook


@dataclass_json
@dataclass
class CodeHookSpecification:
    lambda_code_hook: lambdacodehook.LambdaCodeHook = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaCodeHook' }})
    
