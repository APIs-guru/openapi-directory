from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublicUploadedFileData:
    r"""PublicUploadedFileData
    File information
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hash') }})
    
