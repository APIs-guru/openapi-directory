from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import datakeypairspec_enum


@dataclass_json
@dataclass
class GenerateDataKeyPairRequest:
    encryption_context: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionContext' }})
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_pair_spec: datakeypairspec_enum.DataKeyPairSpecEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyPairSpec' }})
    
