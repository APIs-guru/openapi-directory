from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import streamprocessorinput
from . import streamprocessoroutput
from . import streamprocessorsettings
from . import streamprocessorstatus_enum


@dataclass_json
@dataclass
class DescribeStreamProcessorResponse:
    creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    input: Optional[streamprocessorinput.StreamProcessorInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    last_update_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output: Optional[streamprocessoroutput.StreamProcessorOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    settings: Optional[streamprocessorsettings.StreamProcessorSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Settings' }})
    status: Optional[streamprocessorstatus_enum.StreamProcessorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusMessage' }})
    stream_processor_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamProcessorArn' }})
    
