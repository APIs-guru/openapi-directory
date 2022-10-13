from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import publickeycontainer


@dataclass_json
@dataclass
class UserUserPublicKey:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    public_key_container: Optional[publickeycontainer.PublicKeyContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyContainer' }})
    
