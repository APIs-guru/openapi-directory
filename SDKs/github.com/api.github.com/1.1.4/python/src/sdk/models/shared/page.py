from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pages_source_hash

class PageStatusEnum(str, Enum):
    BUILT = "built"
    BUILDING = "building"
    ERRORED = "errored"


@dataclass_json
@dataclass
class Page:
    cname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cname' }})
    custom_404: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_404' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    source: Optional[pages_source_hash.PagesSourceHash] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: PageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
