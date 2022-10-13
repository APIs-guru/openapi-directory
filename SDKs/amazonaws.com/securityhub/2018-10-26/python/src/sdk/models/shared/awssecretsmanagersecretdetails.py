from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awssecretsmanagersecretrotationrules


@dataclass_json
@dataclass
class AwsSecretsManagerSecretDetails:
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rotation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationEnabled' }})
    rotation_lambda_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationLambdaArn' }})
    rotation_occurred_within_frequency: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationOccurredWithinFrequency' }})
    rotation_rules: Optional[awssecretsmanagersecretrotationrules.AwsSecretsManagerSecretRotationRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RotationRules' }})
    
