from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import provisionedproductstatus_enum
from . import tag


@dataclass_json
@dataclass
class ProvisionedProductAttribute:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    last_provisioning_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastProvisioningRecordId' }})
    last_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastRecordId' }})
    last_successful_provisioning_record_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastSuccessfulProvisioningRecordId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    physical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhysicalId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductName' }})
    provisioning_artifact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactId' }})
    provisioning_artifact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisioningArtifactName' }})
    status: Optional[provisionedproductstatus_enum.ProvisionedProductStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserArn' }})
    user_arn_session: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserArnSession' }})
    
