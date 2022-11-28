from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileEntity:
    r"""FileEntity
    List Folders by path
    """
    
    crc32: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crc32') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_uri') }})
    md5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mime_type') }})
    mtime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    permissions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    preview: Optional[PreviewEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview') }})
    preview_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_id') }})
    priority_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority_color') }})
    provided_mtime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provided_mtime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    subfolders_locked_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subfolders_locked?') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
