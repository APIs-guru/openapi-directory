from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BuildingAddress:
    address_lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLines' }})
    administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrativeArea' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    sublocality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sublocality' }})
    
