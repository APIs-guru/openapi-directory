from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engineattribute


@dataclass_json
@dataclass
class StartMaintenanceRequest:
    engine_attributes: Optional[List[engineattribute.EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngineAttributes' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
