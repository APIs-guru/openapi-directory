from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateShareUploadChannelRequest:
    r"""CreateShareUploadChannelRequest
    Request model for creating an upload channel
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    direct_s3_upload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directS3Upload') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    timestamp_creation: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampCreation'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    timestamp_modification: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampModification'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
