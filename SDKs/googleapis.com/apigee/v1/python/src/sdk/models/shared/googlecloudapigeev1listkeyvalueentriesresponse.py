from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListKeyValueEntriesResponse:
    r"""GoogleCloudApigeeV1ListKeyValueEntriesResponse
    The request structure for listing key value map keys and its corresponding values.
    """
    
    key_value_entries: Optional[List[GoogleCloudApigeeV1KeyValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValueEntries') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
