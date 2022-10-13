from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ampurl
from . import ampurlerror


@dataclass_json
@dataclass
class BatchGetAmpUrlsResponse:
    amp_urls: Optional[List[ampurl.AmpURL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ampUrls' }})
    url_errors: Optional[List[ampurlerror.AmpURLError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlErrors' }})
    
