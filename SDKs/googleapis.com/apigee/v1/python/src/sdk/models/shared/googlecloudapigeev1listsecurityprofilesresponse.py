from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1securityprofile


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSecurityProfilesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    security_profiles: Optional[List[googlecloudapigeev1securityprofile.GoogleCloudApigeeV1SecurityProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityProfiles' }})
    
