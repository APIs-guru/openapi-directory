from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetParameterRequest:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    with_decryption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WithDecryption' }})
    
