from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datakeyspec_enum


@dataclass_json
@dataclass
class GenerateDataKeyWithoutPlaintextRequest:
    encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionContext' }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_spec: Optional[datakeyspec_enum.DataKeySpecEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySpec' }})
    number_of_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfBytes' }})
    
