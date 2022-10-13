from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import provisioningartifactdetail


@dataclass_json
@dataclass
class ListProvisioningArtifactsOutput:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    provisioning_artifact_details: Optional[List[provisioningartifactdetail.ProvisioningArtifactDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactDetails' }})
    
