from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JobLogEventData:
    conversion_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionServerID' }})
    raw_error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawError' }})
    source_server_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceServerID' }})
    target_instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetInstanceID' }})
    
