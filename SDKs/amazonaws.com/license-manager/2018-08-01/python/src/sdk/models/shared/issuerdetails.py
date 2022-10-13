from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssuerDetails:
    key_fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyFingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    sign_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SignKey' }})
    
