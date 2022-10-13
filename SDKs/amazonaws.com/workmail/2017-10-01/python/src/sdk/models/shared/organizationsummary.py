from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrganizationSummary:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    default_mail_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultMailDomain' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
