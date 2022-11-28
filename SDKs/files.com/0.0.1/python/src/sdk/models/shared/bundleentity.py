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
class BundleEntity:
    r"""BundleEntity
    Create Bundle
    """
    
    clickwrap_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickwrap_body') }})
    clickwrap_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickwrap_id') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    form_field_set: Optional[FormFieldSetEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_field_set') }})
    has_inbox: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_inbox') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbox_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbox_id') }})
    max_uses: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_uses') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    password_protected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password_protected') }})
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    preview_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_only') }})
    require_registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_registration') }})
    require_share_recipient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('require_share_recipient') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
