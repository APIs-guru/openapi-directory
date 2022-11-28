from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SslSettingsSslManagementTypeEnum(str, Enum):
    SSL_MANAGEMENT_TYPE_UNSPECIFIED = "SSL_MANAGEMENT_TYPE_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclass
class SslSettings:
    r"""SslSettings
    SSL configuration for a DomainMapping resource.
    """
    
    certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateId') }})
    pending_managed_certificate_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingManagedCertificateId') }})
    ssl_management_type: Optional[SslSettingsSslManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sslManagementType') }})
    
