from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dkimstatus_enum


@dataclass_json
@dataclass
class DkimAttributes:
    signing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SigningEnabled' }})
    status: Optional[dkimstatus_enum.DkimStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    tokens: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tokens' }})
    
