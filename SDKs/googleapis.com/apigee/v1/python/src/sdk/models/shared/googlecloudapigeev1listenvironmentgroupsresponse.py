from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1environmentgroup


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListEnvironmentGroupsResponse:
    environment_groups: Optional[List[googlecloudapigeev1environmentgroup.GoogleCloudApigeeV1EnvironmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentGroups' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
