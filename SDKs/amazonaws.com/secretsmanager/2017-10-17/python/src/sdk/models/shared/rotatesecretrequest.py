from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rotationrulestype


@dataclass_json
@dataclass
class RotateSecretRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    rotation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationLambdaARN' }})
    rotation_rules: Optional[rotationrulestype.RotationRulesType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationRules' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    
