from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1querytimeseriesstatsresponsesequence


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTimeSeriesStatsResponse:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    values: Optional[List[googlecloudapigeev1querytimeseriesstatsresponsesequence.GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
