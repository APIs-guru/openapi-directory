from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DownloadDefaultKeyPairResult:
    private_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateKeyBase64' }})
    public_key_base64: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeyBase64' }})
    
