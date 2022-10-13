from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1archivedeployment


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListArchiveDeploymentsResponse:
    archive_deployments: Optional[List[googlecloudapigeev1archivedeployment.GoogleCloudApigeeV1ArchiveDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveDeployments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
