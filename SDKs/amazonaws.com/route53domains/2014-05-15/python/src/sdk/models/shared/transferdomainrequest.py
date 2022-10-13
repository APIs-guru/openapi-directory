from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactdetail
from . import nameserver
from . import contactdetail
from . import contactdetail


@dataclass_json
@dataclass
class TransferDomainRequest:
    admin_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminContact' }})
    auth_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthCode' }})
    auto_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoRenew' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    duration_in_years: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationInYears' }})
    idn_lang_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdnLangCode' }})
    nameservers: Optional[List[nameserver.Nameserver]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nameservers' }})
    privacy_protect_admin_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivacyProtectAdminContact' }})
    privacy_protect_registrant_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivacyProtectRegistrantContact' }})
    privacy_protect_tech_contact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivacyProtectTechContact' }})
    registrant_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrantContact' }})
    tech_contact: contactdetail.ContactDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechContact' }})
    
