from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import server


@dataclass_json
@dataclass
class StartMaintenanceResponse:
    server: Optional[server.Server] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Server' }})
    
