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
class PublicDownloadShareOutput:
    r"""PublicDownloadShareOutput
    Download Share information
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorName') }})
    file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    has_download_limit: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasDownloadLimit') }})
    is_protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProtected') }})
    limit_reached: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitReached') }})
    media_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaType') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    creator_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorUsername') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    file_key: Optional[FileKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileKey') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    private_key_container: Optional[PrivateKeyContainerOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeyContainer') }})
    
