from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamInfo:
    r"""StreamInfo
    An object describing a Kinesis video stream.
    """
    
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_retention_in_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataRetentionInHours') }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaType') }})
    status: Optional[StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamName') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
