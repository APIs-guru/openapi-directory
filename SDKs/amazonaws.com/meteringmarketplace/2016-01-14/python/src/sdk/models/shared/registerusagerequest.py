from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterUsageRequest:
    nonce: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Nonce' }})
    product_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductCode' }})
    public_key_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicKeyVersion' }})
    
