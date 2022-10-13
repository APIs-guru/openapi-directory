from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import mobiledevice


@dataclass_json
@dataclass
class MobileDevices:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    mobiledevices: Optional[List[mobiledevice.MobileDevice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobiledevices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
