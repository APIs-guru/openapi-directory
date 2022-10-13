from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sourceaccesstype_enum


@dataclass_json
@dataclass
class SourceAccessConfiguration:
    type: Optional[sourceaccesstype_enum.SourceAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URI' }})
    
