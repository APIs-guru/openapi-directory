from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateDomainContactPrivacyRequest:
    admin_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdminPrivacy' }})
    domain_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    registrant_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrantPrivacy' }})
    tech_privacy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TechPrivacy' }})
    
