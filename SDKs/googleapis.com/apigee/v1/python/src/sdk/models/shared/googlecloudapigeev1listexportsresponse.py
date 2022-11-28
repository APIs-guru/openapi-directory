from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListExportsResponse:
    r"""GoogleCloudApigeeV1ListExportsResponse
    The response for ListExports
    """
    
    exports: Optional[List[GoogleCloudApigeeV1Export]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exports') }})
    
