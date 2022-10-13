from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import encryptionconfig


@dataclass_json
@dataclass
class GetEncryptionConfigResult:
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionConfig' }})
    
