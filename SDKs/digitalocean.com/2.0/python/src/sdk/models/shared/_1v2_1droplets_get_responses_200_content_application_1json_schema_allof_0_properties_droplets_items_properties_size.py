from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disk: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    memory: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memory' }})
    price_hourly: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_hourly' }})
    price_monthly: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_monthly' }})
    regions: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    transfer: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer' }})
    vcpus: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcpus' }})
    
