from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogEvent:
    r"""LogEvent
    Log event information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    attribute1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute1') }})
    attribute2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute2') }})
    attribute3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribute3') }})
    auth_parent_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParentSource') }})
    auth_parent_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authParentTarget') }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    object_id1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId1') }})
    object_id2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId2') }})
    object_name1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName1') }})
    object_name2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName2') }})
    object_type1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType1') }})
    object_type2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectType2') }})
    operation_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationName') }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userClient') }})
    user_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userIp') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
