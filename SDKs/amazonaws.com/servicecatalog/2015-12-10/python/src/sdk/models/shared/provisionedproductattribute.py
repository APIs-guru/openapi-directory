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
class ProvisionedProductAttribute:
    r"""ProvisionedProductAttribute
    Information about a provisioned product.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdempotencyToken') }})
    last_provisioning_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastProvisioningRecordId') }})
    last_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastRecordId') }})
    last_successful_provisioning_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastSuccessfulProvisioningRecordId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    physical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhysicalId') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductName') }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactName') }})
    status: Optional[ProvisionedProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserArn') }})
    user_arn_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserArnSession') }})
    
