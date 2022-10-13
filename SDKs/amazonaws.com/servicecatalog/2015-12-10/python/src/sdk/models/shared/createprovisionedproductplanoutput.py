from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateProvisionedProductPlanOutput:
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanId' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanName' }})
    provision_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionProductId' }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    
