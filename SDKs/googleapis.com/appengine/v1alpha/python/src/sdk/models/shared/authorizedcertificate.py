from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import certificaterawdata
from . import managedcertificate


@dataclass_json
@dataclass
class AuthorizedCertificate:
    certificate_raw_data: Optional[certificaterawdata.CertificateRawData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateRawData' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    domain_mappings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainMappingsCount' }})
    domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNames' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    managed_certificate: Optional[managedcertificate.ManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedCertificate' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    visible_domain_mappings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleDomainMappings' }})
    
