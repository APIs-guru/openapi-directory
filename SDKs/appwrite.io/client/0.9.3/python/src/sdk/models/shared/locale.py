from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Locale:
    continent: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent' }})
    continent_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continentCode' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    eu: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eu' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    
