from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateProvisionedProductPlanInput:
    idempotency_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    plan_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlanName') }})
    plan_type: ProvisionedProductPlanTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlanType') }})
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioned_product_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    provisioning_artifact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    notification_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationArns') }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    provisioning_parameters: Optional[List[UpdateProvisioningParameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningParameters') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
