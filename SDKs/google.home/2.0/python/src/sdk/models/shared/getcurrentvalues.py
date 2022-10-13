from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Getcurrentvalues:
    endpoint_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint_enabled' }})
    hotword_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotword_enabled' }})
    
