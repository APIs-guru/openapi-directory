from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import location
from . import image


@dataclass_json
@dataclass
class CharityOrg:
    charity_org_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charityOrgId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    logo_image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoImage' }})
    mission_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missionStatement' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    registration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationId' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
