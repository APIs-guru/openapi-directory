from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1export


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListExportsResponse:
    exports: Optional[List[googlecloudapigeev1export.GoogleCloudApigeeV1Export]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exports' }})
    
