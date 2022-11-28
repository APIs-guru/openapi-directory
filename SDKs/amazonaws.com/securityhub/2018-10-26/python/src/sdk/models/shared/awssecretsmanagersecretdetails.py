from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsSecretsManagerSecretDetails:
    r"""AwsSecretsManagerSecretDetails
    Details about an Secrets Manager secret.
    """
    
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rotation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationEnabled') }})
    rotation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationLambdaArn') }})
    rotation_occurred_within_frequency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationOccurredWithinFrequency') }})
    rotation_rules: Optional[AwsSecretsManagerSecretRotationRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RotationRules') }})
    
