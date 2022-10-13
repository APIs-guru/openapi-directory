from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import engineattribute


@dataclass_json
@dataclass
class ExportServerEngineAttributeResponse:
    engine_attribute: Optional[engineattribute.EngineAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttribute' }})
    server_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
