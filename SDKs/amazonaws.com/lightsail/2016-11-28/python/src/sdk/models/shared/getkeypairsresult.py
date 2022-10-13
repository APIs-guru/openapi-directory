from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keypair


@dataclass_json
@dataclass
class GetKeyPairsResult:
    key_pairs: Optional[List[keypair.KeyPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPairs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
