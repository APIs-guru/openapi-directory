from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductplantype_enum
from . import updateprovisioningparameter
from . import tag


@dataclass_json
@dataclass
class CreateProvisionedProductPlanInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    idempotency_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    notification_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationArns' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    plan_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanName' }})
    plan_type: provisionedproductplantype_enum.ProvisionedProductPlanTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanType' }})
    product_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioned_product_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioning_artifact_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_parameters: Optional[List[updateprovisioningparameter.UpdateProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningParameters' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
