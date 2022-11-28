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
class GroupBlast:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    date_blast_added: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_blast_added') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclass
class GroupDescription:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupMembers:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupName:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupPoolCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupPrivacy:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupRestrictions:
    art_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('art_ok') }})
    has_geo: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_geo') }})
    images_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images_ok') }})
    moderate_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderate_ok') }})
    photos_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos_ok') }})
    restricted_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted_ok') }})
    safe_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safe_ok') }})
    screens_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screens_ok') }})
    videos_ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos_ok') }})
    

@dataclass_json
@dataclass
class GroupRoles:
    admin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    moderator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moderator') }})
    

@dataclass_json
@dataclass
class GroupRules:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class GroupThrottle:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    remaining: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining') }})
    

@dataclass_json
@dataclass
class GroupTopicCount:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_content') }})
    

@dataclass_json
@dataclass
class Group:
    blast: Optional[GroupBlast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blast') }})
    cover: Optional[Cover] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cover') }})
    coverphoto_farm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverphoto_farm') }})
    coverphoto_server: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverphoto_server') }})
    coverphoto_url: Optional[PhotoUrLs] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverphoto_url') }})
    description: Optional[GroupDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    iconfarm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconfarm') }})
    iconserver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconserver') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_admin') }})
    is_member: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_member') }})
    is_moderator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_moderator') }})
    ispoolmoderated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ispoolmoderated') }})
    lang: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lang') }})
    members: Optional[GroupMembers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[GroupName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path_alias') }})
    pool_count: Optional[GroupPoolCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pool_count') }})
    pool_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pool_rows') }})
    privacy: Optional[GroupPrivacy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    restrictions: Optional[GroupRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    roles: Optional[GroupRoles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    rules: Optional[GroupRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    throttle: Optional[GroupThrottle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttle') }})
    topic_count: Optional[GroupTopicCount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_count') }})
    
