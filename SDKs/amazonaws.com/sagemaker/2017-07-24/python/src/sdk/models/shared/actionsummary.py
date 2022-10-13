from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import actionsource
from . import actionstatus_enum


@dataclass_json
@dataclass
class ActionSummary:
    action_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionArn' }})
    action_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionName' }})
    action_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionType' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[actionsource.ActionSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Source' }})
    status: Optional[actionstatus_enum.ActionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
