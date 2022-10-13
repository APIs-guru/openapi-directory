from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1keyvalueentry


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListKeyValueEntriesResponse:
    key_value_entries: Optional[List[googlecloudapigeev1keyvalueentry.GoogleCloudApigeeV1KeyValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValueEntries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
