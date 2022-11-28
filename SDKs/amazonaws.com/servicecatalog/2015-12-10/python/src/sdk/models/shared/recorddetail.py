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
class RecordDetail:
    r"""RecordDetail
    Information about a request operation.
    """
    
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchRoleArn') }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PathId') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductId') }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductName') }})
    provisioned_product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedProductType') }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisioningArtifactId') }})
    record_errors: Optional[List[RecordError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordErrors') }})
    record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordId') }})
    record_tags: Optional[List[RecordTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordTags') }})
    record_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordType') }})
    status: Optional[RecordStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
