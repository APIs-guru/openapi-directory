from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductplantype_enum


@dataclass_json
@dataclass
class ProvisionedProductPlanSummary:
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanId' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanName' }})
    plan_type: Optional[provisionedproductplantype_enum.ProvisionedProductPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanType' }})
    provision_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionProductId' }})
    provision_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    
