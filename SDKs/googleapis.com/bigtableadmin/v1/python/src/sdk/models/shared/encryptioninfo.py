from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status

class EncryptionInfoEncryptionTypeEnum(str, Enum):
    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class EncryptionInfo:
    encryption_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionStatus' }})
    encryption_type: Optional[EncryptionInfoEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyVersion' }})
    
