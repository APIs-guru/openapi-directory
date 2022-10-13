from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1developer


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListOfDevelopersResponse:
    developer: Optional[List[googlecloudapigeev1developer.GoogleCloudApigeeV1Developer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'developer' }})
    
