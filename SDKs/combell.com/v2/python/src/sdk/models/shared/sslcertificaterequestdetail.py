from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sslcertificatetype_enum
from . import sslsubjectaltname
from . import sslcertificatevalidationlevel_enum
from . import sslcertificaterequestvalidation
from . import sslcertificatevendor_enum


@dataclass_json
@dataclass
class SslCertificateRequestDetail:
    certificate_type: Optional[sslcertificatetype_enum.SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_type' }})
    common_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'common_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    order_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_code' }})
    subject_alt_names: Optional[List[sslsubjectaltname.SslSubjectAltName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject_alt_names' }})
    validation_level: Optional[sslcertificatevalidationlevel_enum.SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_level' }})
    validations: Optional[List[sslcertificaterequestvalidation.SslCertificateRequestValidation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validations' }})
    vendor: Optional[sslcertificatevendor_enum.SslCertificateVendorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    
