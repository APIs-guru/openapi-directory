from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shutdowneventconfiguration


@dataclass_json
@dataclass
class LifecycleEventConfiguration:
    shutdown: Optional[shutdowneventconfiguration.ShutdownEventConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Shutdown' }})
    
