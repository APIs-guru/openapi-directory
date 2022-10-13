from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Sign:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificate' }})
    intermediate_certs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intermediate_certs' }})
    nonce: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonce' }})
    signed_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signed_data' }})
    
