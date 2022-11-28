from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListAPICategoriesResponse:
    r"""GoogleCloudApigeeV1ListAPICategoriesResponse
    the response for ListApiCategoriesRequest.
    """
    
    data: Optional[List[GoogleCloudApigeeV1APICategoryData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
