from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceactionassociationerrorcode_enum


@dataclass_json
@dataclass
class FailedServiceActionAssociation:
    error_code: Optional[serviceactionassociationerrorcode_enum.ServiceActionAssociationErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    service_action_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceActionId' }})
    
