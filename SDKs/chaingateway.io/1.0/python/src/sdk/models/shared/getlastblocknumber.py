from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetLastBlockNumber:
    blocknumber: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocknumber' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    
