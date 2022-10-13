from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductplantype_enum
from . import updateprovisioningparameter
from . import provisionedproductplanstatus_enum
from . import tag


@dataclass_json
@dataclass
class ProvisionedProductPlanDetails:
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notification_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationArns' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanId' }})
    plan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanName' }})
    plan_type: Optional[provisionedproductplantype_enum.ProvisionedProductPlanTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlanType' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provision_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionProductId' }})
    provision_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_parameters: Optional[List[updateprovisioningparameter.UpdateProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningParameters' }})
    status: Optional[provisionedproductplanstatus_enum.ProvisionedProductPlanStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
