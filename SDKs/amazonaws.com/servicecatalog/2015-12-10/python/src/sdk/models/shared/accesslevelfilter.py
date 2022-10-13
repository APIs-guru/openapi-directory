from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesslevelfilterkey_enum


@dataclass_json
@dataclass
class AccessLevelFilter:
    key: Optional[accesslevelfilterkey_enum.AccessLevelFilterKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
