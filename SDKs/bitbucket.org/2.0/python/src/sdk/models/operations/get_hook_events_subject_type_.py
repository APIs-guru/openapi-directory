from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetHookEventsSubjectTypeSubjectTypeEnum(str, Enum):
    WORKSPACE = "workspace"
    USER = "user"
    REPOSITORY = "repository"
    TEAM = "team"


@dataclass
class GetHookEventsSubjectTypePathParams:
    subject_type: GetHookEventsSubjectTypeSubjectTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'subject_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHookEventsSubjectTypeSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetHookEventsSubjectTypeSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetHookEventsSubjectTypeSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHookEventsSubjectTypeSecurity:
    option1: Optional[GetHookEventsSubjectTypeSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetHookEventsSubjectTypeSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetHookEventsSubjectTypeSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetHookEventsSubjectTypeRequest:
    path_params: GetHookEventsSubjectTypePathParams = field(default=None)
    security: GetHookEventsSubjectTypeSecurity = field(default=None)
    

@dataclass
class GetHookEventsSubjectTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_hook_events: Optional[shared.PaginatedHookEvents] = field(default=None)
    
