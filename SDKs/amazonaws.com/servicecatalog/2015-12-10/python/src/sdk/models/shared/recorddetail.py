from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import recorderror
from . import recordtag
from . import recordstatus_enum


@dataclass_json
@dataclass
class RecordDetail:
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    launch_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchRoleArn' }})
    path_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PathId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    provisioned_product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductId' }})
    provisioned_product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductName' }})
    provisioned_product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedProductType' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    record_errors: Optional[List[recorderror.RecordError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordErrors' }})
    record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordId' }})
    record_tags: Optional[List[recordtag.RecordTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordTags' }})
    record_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordType' }})
    status: Optional[recordstatus_enum.RecordStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    updated_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
