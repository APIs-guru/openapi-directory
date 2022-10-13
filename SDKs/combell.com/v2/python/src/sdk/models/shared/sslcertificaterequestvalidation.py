from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import sslcertificaterequestvalidationtype_enum


@dataclass_json
@dataclass
class SslCertificateRequestValidation:
    auto_validated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_validated' }})
    cname_validation_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cname_validation_content' }})
    cname_validation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cname_validation_name' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dns_name' }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_addresses' }})
    file_validation_content: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_validation_content' }})
    file_validation_url_http: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_validation_url_http' }})
    file_validation_url_https: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_validation_url_https' }})
    type: Optional[sslcertificaterequestvalidationtype_enum.SslCertificateRequestValidationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
