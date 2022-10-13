from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HashKeyRange:
    ending_hash_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndingHashKey' }})
    starting_hash_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingHashKey' }})
    
