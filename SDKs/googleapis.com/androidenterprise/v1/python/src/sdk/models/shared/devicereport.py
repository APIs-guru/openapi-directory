from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appstate


@dataclass_json
@dataclass
class DeviceReport:
    app_state: Optional[List[appstate.AppState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appState' }})
    last_updated_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestampMillis' }})
    
