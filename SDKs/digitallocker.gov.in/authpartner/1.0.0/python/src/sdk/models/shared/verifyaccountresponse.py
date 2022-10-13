from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VerifyAccountResponse:
    digilockerid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digilockerid' }})
    registered: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registered' }})
    
