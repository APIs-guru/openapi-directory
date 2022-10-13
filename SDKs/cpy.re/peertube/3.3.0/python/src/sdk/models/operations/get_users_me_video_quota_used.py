from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetUsersMeVideoQuotaUsedSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideoQuotaUsedRequest:
    security: GetUsersMeVideoQuotaUsedSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUsersMeVideoQuotaUsed200ApplicationJSON:
    video_quota_used: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoQuotaUsed' }})
    video_quota_used_daily: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoQuotaUsedDaily' }})
    

@dataclass
class GetUsersMeVideoQuotaUsedResponse:
    content_type: str = field(default=None)
    get_users_me_video_quota_used_200_application_json_object: Optional[GetUsersMeVideoQuotaUsed200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
