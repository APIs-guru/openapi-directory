from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthorizedCertificate:
    r"""AuthorizedCertificate
    An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains.
    """
    
    certificate_raw_data: Optional[CertificateRawData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateRawData') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domain_mappings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainMappingsCount') }})
    domain_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNames') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    managed_certificate: Optional[ManagedCertificate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedCertificate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visible_domain_mappings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleDomainMappings') }})
    
