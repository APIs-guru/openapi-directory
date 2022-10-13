from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usercompact
from . import usercompact
from . import customfieldcompact
from . import taskcompact
from . import taskcompact
from . import taskcompact
from . import usercompact
from . import like
from . import like
from . import storyresponsedates
from . import enumoption
from . import enumoption
from . import sectioncompact
from . import storyresponsedates
from . import enumoption
from . import enumoption
from . import sectioncompact
from . import preview
from . import projectcompact
from . import storycompact
from . import tagcompact
from . import taskcompact

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
    assignee: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignee' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    custom_field: Optional[customfieldcompact.CustomFieldCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    dependency: Optional[taskcompact.TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependency' }})
    duplicate_of: Optional[taskcompact.TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicate_of' }})
    duplicated_from: Optional[taskcompact.TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicated_from' }})
    follower: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'follower' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    hearted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearted' }})
    hearts: Optional[List[like.Like]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hearts' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    is_edited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_edited' }})
    is_pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pinned' }})
    liked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liked' }})
    likes: Optional[List[like.Like]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likes' }})
    new_approval_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_approval_status' }})
    new_dates: Optional[storyresponsedates.StoryResponseDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_dates' }})
    new_enum_value: Optional[enumoption.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_enum_value' }})
    new_multi_enum_values: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_multi_enum_values' }})
    new_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_name' }})
    new_number_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_number_value' }})
    new_resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_resource_subtype' }})
    new_section: Optional[sectioncompact.SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_section' }})
    new_text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_text_value' }})
    num_hearts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_hearts' }})
    num_likes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_likes' }})
    old_approval_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_approval_status' }})
    old_dates: Optional[storyresponsedates.StoryResponseDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_dates' }})
    old_enum_value: Optional[enumoption.EnumOption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_enum_value' }})
    old_multi_enum_values: Optional[List[enumoption.EnumOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_multi_enum_values' }})
    old_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_name' }})
    old_number_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_number_value' }})
    old_resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_resource_subtype' }})
    old_section: Optional[sectioncompact.SectionCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_section' }})
    old_text_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'old_text_value' }})
    previews: Optional[List[preview.Preview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previews' }})
    project: Optional[projectcompact.ProjectCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    source: Optional[StoryResponseSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    sticker_name: Optional[StoryResponseStickerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticker_name' }})
    story: Optional[storycompact.StoryCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'story' }})
    tag: Optional[tagcompact.TagCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    target: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    task: Optional[taskcompact.TaskCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
