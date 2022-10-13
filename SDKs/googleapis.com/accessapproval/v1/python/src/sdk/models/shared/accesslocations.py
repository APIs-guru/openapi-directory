from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccessLocations:
    principal_office_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalOfficeCountry' }})
    principal_physical_location_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'principalPhysicalLocationCountry' }})
    
