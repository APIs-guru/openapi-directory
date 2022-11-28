from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TopicMessage:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class Topic:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    author_is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_is_deleted') }})
    author_path_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_path_alias') }})
    authorname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorname') }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_delete') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_edit') }})
    can_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('can_reply') }})
    count_replies: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count_replies') }})
    datecreate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datecreate') }})
    datelastpost: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datelastpost') }})
    iconfarm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconfarm') }})
    iconserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconserver') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_locked') }})
    is_pro: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pro') }})
    is_sticky: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_sticky') }})
    last_reply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_reply') }})
    lastedit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastedit') }})
    message: Optional[TopicMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
