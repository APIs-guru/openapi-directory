from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import commandpluginstatus_enum


@dataclass_json
@dataclass
class CommandPlugin:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3BucketName' }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3KeyPrefix' }})
    output_s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Region' }})
    response_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseCode' }})
    response_finish_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseFinishDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    response_start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseStartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardErrorUrl' }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardOutputUrl' }})
    status: Optional[commandpluginstatus_enum.CommandPluginStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusDetails' }})
    
