from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import contactdetail
from . import contactdetail
from . import contactdetail


@dataclass_json
@dataclass
class UpdateDomainContactRequest:
    admin_contact: Optional[contactdetail.ContactDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminContact' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    registrant_contact: Optional[contactdetail.ContactDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrantContact' }})
    tech_contact: Optional[contactdetail.ContactDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechContact' }})
    
