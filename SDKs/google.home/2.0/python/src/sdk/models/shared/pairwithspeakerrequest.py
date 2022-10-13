from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PairwithSpeakerRequest:
    connect: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connect' }})
    mac_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    profile: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    
