from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetAmpUrlsResponse:
    r"""BatchGetAmpUrlsResponse
    Batch AMP URL response.
    """
    
    amp_urls: Optional[List[AmpURL]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ampUrls') }})
    url_errors: Optional[List[AmpURLError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlErrors') }})
    
