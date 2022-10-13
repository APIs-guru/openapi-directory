from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAppRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    force_stop_app_replication: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceStopAppReplication' }})
    force_terminate_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceTerminateApp' }})
    
