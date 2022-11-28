from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsElasticsearchDomainEncryptionAtRestOptions:
    r"""AwsElasticsearchDomainEncryptionAtRestOptions
    Details about the configuration for encryption at rest.
    """
    
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
