from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import status_enum


@dataclass_json
@dataclass
class StreamInfo:
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    data_retention_in_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRetentionInHours' }})
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaType' }})
    status: Optional[status_enum.StatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
