from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1datacollector


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDataCollectorsResponse:
    data_collectors: Optional[List[googlecloudapigeev1datacollector.GoogleCloudApigeeV1DataCollector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCollectors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
