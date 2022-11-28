from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RotateSecretRequest:
    secret_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecretId') }})
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    rotation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationLambdaARN') }})
    rotation_rules: Optional[RotationRulesType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationRules') }})
    
