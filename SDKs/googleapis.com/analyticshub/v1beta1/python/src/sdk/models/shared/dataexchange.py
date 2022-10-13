from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DataExchange:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    documentation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    listing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryContact' }})
    
