from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import additionalvalidationattribute
from . import sslcertificatetype_enum
from . import sslcertificatevalidationlevel_enum


@dataclass_json
@dataclass
class CreateSslCertificateRequest:
    additional_validation_attributes: Optional[List[additionalvalidationattribute.AdditionalValidationAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_validation_attributes' }})
    certificate_type: Optional[sslcertificatetype_enum.SslCertificateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate_type' }})
    csr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csr' }})
    validation_level: Optional[sslcertificatevalidationlevel_enum.SslCertificateValidationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validation_level' }})
    
