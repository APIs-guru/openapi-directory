from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EncryptionInfoEncryptionTypeEnum(str, Enum):
    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class EncryptionInfo:
    r"""EncryptionInfo
    Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
    """
    
    encryption_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionStatus') }})
    encryption_type: Optional[EncryptionInfoEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyVersion') }})
    

@dataclass_json
@dataclass
class EncryptionInfoInput:
    r"""EncryptionInfoInput
    Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
    """
    
    encryption_status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionStatus') }})
    
