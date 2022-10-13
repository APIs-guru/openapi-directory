from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import soachange


@dataclass_json
@dataclass
class PrivateDNSPropertiesMutableChange:
    soa: soachange.SoaChange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SOA' }})
    
