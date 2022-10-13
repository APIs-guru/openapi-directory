from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import containerservicelogevent


@dataclass_json
@dataclass
class GetContainerLogResult:
    log_events: Optional[List[containerservicelogevent.ContainerServiceLogEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logEvents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
