from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssuredworkloadsV1WorkloadKmsSettings:
    r"""GoogleCloudAssuredworkloadsV1WorkloadKmsSettings
    Settings specific to the Key Management Service. This message is deprecated. In order to create a Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type field.
    """
    
    next_rotation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRotationTime') }})
    rotation_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotationPeriod') }})
    
