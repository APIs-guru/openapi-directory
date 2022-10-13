from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usercontext
from . import usercontext
from . import metadataproperties
from . import actionsource
from . import actionstatus_enum


@dataclass_json
@dataclass
class DescribeActionResponse:
    action_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionArn' }})
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    action_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    created_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    last_modified_by: Optional[usercontext.UserContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedBy' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metadata_properties: Optional[metadataproperties.MetadataProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataProperties' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Properties' }})
    source: Optional[actionsource.ActionSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    status: Optional[actionstatus_enum.ActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
