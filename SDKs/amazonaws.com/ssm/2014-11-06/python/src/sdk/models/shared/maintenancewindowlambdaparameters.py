from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MaintenanceWindowLambdaParameters:
    client_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientContext' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payload' }})
    qualifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Qualifier' }})
    
