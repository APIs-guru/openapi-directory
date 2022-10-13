from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import resourcetype_enum


@dataclass_json
@dataclass
class LicenseOperationFailure:
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    failure_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_list: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataList' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationName' }})
    operation_requested_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationRequestedBy' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    resource_owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceOwnerId' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
