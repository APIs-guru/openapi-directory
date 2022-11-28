from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetHookEventsSubjectTypeSubjectTypeEnum(str, Enum):
    WORKSPACE = "workspace"
    USER = "user"
    REPOSITORY = "repository"
    TEAM = "team"


@dataclass
class GetHookEventsSubjectTypePathParams:
    subject_type: GetHookEventsSubjectTypeSubjectTypeEnum = field(metadata={'path_param': { 'field_name': 'subject_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHookEventsSubjectTypeSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetHookEventsSubjectTypeRequest:
    path_params: GetHookEventsSubjectTypePathParams = field()
    security: GetHookEventsSubjectTypeSecurity = field()
    

@dataclass
class GetHookEventsSubjectTypeResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_hook_events: Optional[shared.PaginatedHookEvents] = field(default=None)
    
