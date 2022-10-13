from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagedConfigurationsSettings:
    last_updated_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedTimestampMillis' }})
    mcm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mcmId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
