from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsersMeVideoQuotaUsedSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetUsersMeVideoQuotaUsed200ApplicationJSON:
    video_quota_used: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoQuotaUsed') }})
    video_quota_used_daily: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoQuotaUsedDaily') }})
    

@dataclass
class GetUsersMeVideoQuotaUsedRequest:
    security: GetUsersMeVideoQuotaUsedSecurity = field()
    

@dataclass
class GetUsersMeVideoQuotaUsedResponse:
    content_type: str = field()
    status_code: int = field()
    get_users_me_video_quota_used_200_application_json_object: Optional[GetUsersMeVideoQuotaUsed200ApplicationJSON] = field(default=None)
    
