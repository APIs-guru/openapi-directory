from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import pages_https_certificate
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
    https_certificate: Optional[pages_https_certificate.PagesHTTPSCertificate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'https_certificate' }})
    https_enforced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'https_enforced' }})
    public: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    source: Optional[pages_source_hash.PagesSourceHash] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: PageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
