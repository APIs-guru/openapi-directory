from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetAbusesFilterEnum(str, Enum):
    VIDEO = "video"
    COMMENT = "comment"
    ACCOUNT = "account"

class GetAbusesVideoIsEnum(str, Enum):
    DELETED = "deleted"
    BLACKLISTED = "blacklisted"


@dataclass
class GetAbusesQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[GetAbusesFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    predefined_reason: Optional[List[shared.PredefinedAbuseReasonsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'predefinedReason', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    search_reportee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchReportee', 'style': 'form', 'explode': True }})
    search_reporter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchReporter', 'style': 'form', 'explode': True }})
    search_video: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchVideo', 'style': 'form', 'explode': True }})
    search_video_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchVideoChannel', 'style': 'form', 'explode': True }})
    sort: Optional[shared.AbusesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    state: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    video_is: Optional[GetAbusesVideoIsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'videoIs', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAbusesSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAbusesRequest:
    query_params: GetAbusesQueryParams = field(default=None)
    security: GetAbusesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAbuses200ApplicationJSON:
    data: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class GetAbusesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_abuses_200_application_json_object: Optional[GetAbuses200ApplicationJSON] = field(default=None)
    
