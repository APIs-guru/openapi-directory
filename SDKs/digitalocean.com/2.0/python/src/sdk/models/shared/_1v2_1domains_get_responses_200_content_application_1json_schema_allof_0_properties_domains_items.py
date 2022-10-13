from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItems:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    zone_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone_file' }})
    
