from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventSourceConfiguration:
    r"""EventSourceConfiguration
    Describes mapping between an Amazon Kinesis stream and a Lambda function.
    """
    
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsActive') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Role') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UUID') }})
    
