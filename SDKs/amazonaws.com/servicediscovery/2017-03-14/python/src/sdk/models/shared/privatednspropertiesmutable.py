from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import soa


@dataclass_json
@dataclass
class PrivateDNSPropertiesMutable:
    soa: soa.Soa = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SOA' }})
    
