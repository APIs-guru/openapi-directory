from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1droplets_get_responses_200_content_application_1json_schema_allof_0_properties_droplets_items


@dataclass_json
@dataclass
class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    features: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sizes: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems:
    droplet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    region: Optional[Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItemsRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
