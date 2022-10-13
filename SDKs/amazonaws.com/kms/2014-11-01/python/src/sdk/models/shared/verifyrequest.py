from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import messagetype_enum
from . import signingalgorithmspec_enum


@dataclass_json
@dataclass
class VerifyRequest:
    grant_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantTokens' }})
    key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    message_type: Optional[messagetype_enum.MessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageType' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Signature' }})
    signing_algorithm: signingalgorithmspec_enum.SigningAlgorithmSpecEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningAlgorithm' }})
    
