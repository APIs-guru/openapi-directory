from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StoryResponseSourceEnum(str, Enum):
    WEB = "web"
    EMAIL = "email"
    MOBILE = "mobile"
    API = "api"
    UNKNOWN = "unknown"

class StoryResponseStickerNameEnum(str, Enum):
    GREEN_CHECKMARK = "green_checkmark"
    PEOPLE_DANCING = "people_dancing"
    DANCING_UNICORN = "dancing_unicorn"
    HEART = "heart"
    PARTY_POPPER = "party_popper"
    PEOPLE_WAVING_FLAGS = "people_waving_flags"
    SPLASHING_NARWHAL = "splashing_narwhal"
    TROPHY = "trophy"
    YETI_RIDING_UNICORN = "yeti_riding_unicorn"
    CELEBRATING_PEOPLE = "celebrating_people"
    DETERMINED_CLIMBERS = "determined_climbers"
    PHOENIX_SPREADING_LOVE = "phoenix_spreading_love"


@dataclass_json
@dataclass
class StoryResponse:
    assignee: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignee') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    custom_field: Optional[CustomFieldCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_field') }})
    dependency: Optional[TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dependency') }})
    duplicate_of: Optional[TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicate_of') }})
    duplicated_from: Optional[TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duplicated_from') }})
    follower: Optional[UserCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('follower') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    hearted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearted') }})
    hearts: Optional[List[Like]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hearts') }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    is_edited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_edited') }})
    is_pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pinned') }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liked') }})
    likes: Optional[List[Like]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    new_approval_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_approval_status') }})
    new_dates: Optional[StoryResponseDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_dates') }})
    new_enum_value: Optional[EnumOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_enum_value') }})
    new_multi_enum_values: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_multi_enum_values') }})
    new_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_name') }})
    new_number_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_number_value') }})
    new_resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_resource_subtype') }})
    new_section: Optional[SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_section') }})
    new_text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_text_value') }})
    num_hearts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_hearts') }})
    num_likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_likes') }})
    old_approval_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_approval_status') }})
    old_dates: Optional[StoryResponseDates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_dates') }})
    old_enum_value: Optional[EnumOption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_enum_value') }})
    old_multi_enum_values: Optional[List[EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_multi_enum_values') }})
    old_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_name') }})
    old_number_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_number_value') }})
    old_resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_resource_subtype') }})
    old_section: Optional[SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_section') }})
    old_text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('old_text_value') }})
    previews: Optional[List[Preview]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previews') }})
    project: Optional[ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_subtype') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    source: Optional[StoryResponseSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    sticker_name: Optional[StoryResponseStickerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticker_name') }})
    story: Optional[StoryCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('story') }})
    tag: Optional[TagCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    target: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    task: Optional[TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
