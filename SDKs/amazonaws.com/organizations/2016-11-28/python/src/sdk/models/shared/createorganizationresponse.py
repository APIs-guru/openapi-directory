from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organization


@dataclass_json
@dataclass
class CreateOrganizationResponse:
    organization: Optional[organization.Organization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Organization' }})
    
