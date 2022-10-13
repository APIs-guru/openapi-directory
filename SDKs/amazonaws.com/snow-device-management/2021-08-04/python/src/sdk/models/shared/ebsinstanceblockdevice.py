from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import attachmentstatus_enum


@dataclass_json
@dataclass
class EbsInstanceBlockDevice:
    attach_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteOnTermination' }})
    status: Optional[attachmentstatus_enum.AttachmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
