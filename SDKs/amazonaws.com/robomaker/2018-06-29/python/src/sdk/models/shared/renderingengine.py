from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import renderingenginetype_enum


@dataclass_json
@dataclass
class RenderingEngine:
    name: Optional[renderingenginetype_enum.RenderingEngineTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
