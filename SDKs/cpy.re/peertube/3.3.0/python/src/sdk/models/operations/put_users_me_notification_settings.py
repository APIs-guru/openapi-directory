from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PutUsersMeNotificationSettingsRequestBody:
    abuse_as_moderator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abuseAsModerator') }})
    auto_instance_following: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoInstanceFollowing') }})
    blacklist_on_my_video: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blacklistOnMyVideo') }})
    comment_mention: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentMention') }})
    my_video_import_finished: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myVideoImportFinished') }})
    my_video_published: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myVideoPublished') }})
    new_comment_on_my_video: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newCommentOnMyVideo') }})
    new_follow: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newFollow') }})
    new_instance_follower: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newInstanceFollower') }})
    new_user_registration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newUserRegistration') }})
    new_video_from_subscription: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newVideoFromSubscription') }})
    video_auto_blacklist_as_moderator: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoAutoBlacklistAsModerator') }})
    

@dataclass
class PutUsersMeNotificationSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUsersMeNotificationSettingsRequest:
    security: PutUsersMeNotificationSettingsSecurity = field()
    request: Optional[PutUsersMeNotificationSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUsersMeNotificationSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    
