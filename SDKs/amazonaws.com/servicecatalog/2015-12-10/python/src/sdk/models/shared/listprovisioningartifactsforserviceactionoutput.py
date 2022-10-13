from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningartifactview


@dataclass_json
@dataclass
class ListProvisioningArtifactsForServiceActionOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    provisioning_artifact_views: Optional[List[provisioningartifactview.ProvisioningArtifactView]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactViews' }})
    
