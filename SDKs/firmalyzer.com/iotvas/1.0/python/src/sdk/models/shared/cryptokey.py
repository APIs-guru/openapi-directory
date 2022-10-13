from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CryptoKey:
    algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithm' }})
    bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bits' }})
    file_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_hash' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_name' }})
    pem_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pem_type' }})
    
