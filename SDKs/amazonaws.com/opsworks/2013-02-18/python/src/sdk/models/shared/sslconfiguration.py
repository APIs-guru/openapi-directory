from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SslConfiguration:
    certificate: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Certificate' }})
    chain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Chain' }})
    private_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateKey' }})
    
