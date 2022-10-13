from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1resourcefile


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEnvironmentResourcesResponse:
    resource_file: Optional[List[googlecloudapigeev1resourcefile.GoogleCloudApigeeV1ResourceFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceFile' }})
    
