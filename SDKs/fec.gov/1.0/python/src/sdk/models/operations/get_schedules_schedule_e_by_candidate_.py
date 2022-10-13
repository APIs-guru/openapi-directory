from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetSchedulesScheduleEByCandidateOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"

class GetSchedulesScheduleEByCandidateSupportOpposeEnum(str, Enum):
    S = "S"
    O = "O"


@dataclass
class GetSchedulesScheduleEByCandidateQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    candidate_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'candidate_id', 'style': 'form', 'explode': True }})
    committee_id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'committee_id', 'style': 'form', 'explode': True }})
    cycle: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    office: Optional[GetSchedulesScheduleEByCandidateOfficeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_hide_null: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_hide_null', 'style': 'form', 'explode': True }})
    sort_null_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_null_only', 'style': 'form', 'explode': True }})
    sort_nulls_last: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sort_nulls_last', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    support_oppose: Optional[GetSchedulesScheduleEByCandidateSupportOpposeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'support_oppose', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchedulesScheduleEByCandidateRequest:
    query_params: GetSchedulesScheduleEByCandidateQueryParams = field(default=None)
    

@dataclass
class GetSchedulesScheduleEByCandidateResponse:
    content_type: str = field(default=None)
    schedule_e_by_candidate_page: Optional[shared.ScheduleEByCandidatePage] = field(default=None)
    status_code: int = field(default=None)
    
