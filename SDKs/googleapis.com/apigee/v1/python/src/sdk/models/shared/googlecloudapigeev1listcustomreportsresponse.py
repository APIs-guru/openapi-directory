from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1customreport


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListCustomReportsResponse:
    qualifier: Optional[List[googlecloudapigeev1customreport.GoogleCloudApigeeV1CustomReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualifier' }})
    
