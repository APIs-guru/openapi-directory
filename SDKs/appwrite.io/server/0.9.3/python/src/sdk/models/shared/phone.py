from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Phone:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    country_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryName' }})
    
