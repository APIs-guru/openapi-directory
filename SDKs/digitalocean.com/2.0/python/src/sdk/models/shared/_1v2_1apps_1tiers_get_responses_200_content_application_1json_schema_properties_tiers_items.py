from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21apps1tiersGetResponses200ContentApplication1jsonSchemaPropertiesTiersItems:
    build_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_seconds' }})
    egress_bandwidth_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'egress_bandwidth_bytes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    storage_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storage_bytes' }})
    
