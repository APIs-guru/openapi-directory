from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activitytypeinfo


@dataclass_json
@dataclass
class ActivityTypeInfos:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    type_infos: List[activitytypeinfo.ActivityTypeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeInfos' }})
    
