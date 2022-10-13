from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1organizationprojectmapping


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListOrganizationsResponse:
    organizations: Optional[List[googlecloudapigeev1organizationprojectmapping.GoogleCloudApigeeV1OrganizationProjectMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    
