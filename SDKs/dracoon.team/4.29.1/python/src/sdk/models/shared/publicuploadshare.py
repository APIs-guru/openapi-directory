from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublicUploadShareOutput:
    r"""PublicUploadShareOutput
    Upload Share information
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creator_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorName') }})
    is_protected: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isProtected') }})
    max_slots: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSlots') }})
    creator_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorUsername') }})
    expire_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    max_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSize') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    remaining_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingSize') }})
    remaining_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingSlots') }})
    show_uploaded_files: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showUploadedFiles') }})
    uploaded_files: Optional[List[PublicUploadedFileData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadedFiles') }})
    user_user_public_key_list: Optional[UserUserPublicKeyListOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userUserPublicKeyList') }})
    
