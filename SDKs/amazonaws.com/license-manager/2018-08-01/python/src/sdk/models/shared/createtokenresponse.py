from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tokentype_enum


@dataclass_json
@dataclass
class CreateTokenResponse:
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenId' }})
    token_type: Optional[tokentype_enum.TokenTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenType' }})
    
