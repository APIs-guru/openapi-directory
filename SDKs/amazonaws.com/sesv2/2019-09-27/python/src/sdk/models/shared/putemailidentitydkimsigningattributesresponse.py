from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dkimstatus_enum


@dataclass_json
@dataclass
class PutEmailIdentityDkimSigningAttributesResponse:
    dkim_status: Optional[dkimstatus_enum.DkimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DkimStatus' }})
    dkim_tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DkimTokens' }})
    
