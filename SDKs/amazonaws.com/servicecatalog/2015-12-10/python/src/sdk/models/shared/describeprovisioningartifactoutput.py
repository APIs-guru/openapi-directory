from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisioningartifactdetail
from . import status_enum


@dataclass_json
@dataclass
class DescribeProvisioningArtifactOutput:
    info: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Info' }})
    provisioning_artifact_detail: Optional[provisioningartifactdetail.ProvisioningArtifactDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactDetail' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
