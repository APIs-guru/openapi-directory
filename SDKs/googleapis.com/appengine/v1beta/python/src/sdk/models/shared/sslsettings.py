from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SslSettingsSslManagementTypeEnum(str, Enum):
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclass
class SslSettings:
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateId' }})
    pending_managed_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingManagedCertificateId' }})
    ssl_management_type: Optional[SslSettingsSslManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sslManagementType' }})
    
