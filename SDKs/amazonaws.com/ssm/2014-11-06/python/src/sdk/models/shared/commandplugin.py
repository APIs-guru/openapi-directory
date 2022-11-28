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
class CommandPlugin:
    r"""CommandPlugin
    Describes plugin details.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3BucketName') }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3KeyPrefix') }})
    output_s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputS3Region') }})
    response_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseCode') }})
    response_finish_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseFinishDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    response_start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseStartDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    standard_error_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardErrorUrl') }})
    standard_output_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StandardOutputUrl') }})
    status: Optional[CommandPluginStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusDetails') }})
    
