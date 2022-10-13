from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sslcertificatetype_enum
from . import sslcertificatevalidationlevel_enum
from . import sslcertificatevendor_enum


@dataclass_json
@dataclass
class SslCertificateRequest:
    certificate_type: Optional[sslcertificatetype_enum.SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_type' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'common_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    order_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_code' }})
    validation_level: Optional[sslcertificatevalidationlevel_enum.SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_level' }})
    vendor: Optional[sslcertificatevendor_enum.SslCertificateVendorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
