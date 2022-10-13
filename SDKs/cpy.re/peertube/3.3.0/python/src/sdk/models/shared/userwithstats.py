from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import nsfwpolicy_enum

class UserWithStatsRoleLabelEnum(str, Enum):
    USER = "User"
    MODERATOR = "Moderator"
    ADMINISTRATOR = "Administrator"


@dataclass_json
@dataclass
class UserWithStats:
    abuses_accepted_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abusesAcceptedCount' }})
    abuses_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abusesCount' }})
    abuses_created_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abusesCreatedCount' }})
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    auto_play_next_video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoPlayNextVideo' }})
    auto_play_next_video_playlist: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoPlayNextVideoPlaylist' }})
    auto_play_video: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoPlayVideo' }})
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked' }})
    blocked_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedReason' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailVerified' }})
    id: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_login_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    no_instance_config_warning_modal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noInstanceConfigWarningModal' }})
    no_welcome_modal: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noWelcomeModal' }})
    nsfw_policy: Optional[nsfwpolicy_enum.NsfwPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsfwPolicy' }})
    plugin_auth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pluginAuth' }})
    role: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_label: Optional[UserWithStatsRoleLabelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleLabel' }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    video_channels: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoChannels' }})
    video_comments_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoCommentsCount' }})
    video_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoQuota' }})
    video_quota_daily: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoQuotaDaily' }})
    videos_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videosCount' }})
    webtorrent_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webtorrentEnabled' }})
    
