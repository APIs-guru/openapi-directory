from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1developerapp


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListDeveloperAppsResponse:
    app: Optional[List[googlecloudapigeev1developerapp.GoogleCloudApigeeV1DeveloperApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app' }})
    
