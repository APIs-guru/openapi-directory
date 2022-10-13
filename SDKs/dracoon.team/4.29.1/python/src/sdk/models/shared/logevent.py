from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogEvent:
    attribute1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute1' }})
    attribute2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute2' }})
    attribute3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribute3' }})
    auth_parent_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authParentSource' }})
    auth_parent_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authParentTarget' }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    object_id1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId1' }})
    object_id2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId2' }})
    object_name1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName1' }})
    object_name2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName2' }})
    object_type1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType1' }})
    object_type2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectType2' }})
    operation_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationName' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userClient' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userIp' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
