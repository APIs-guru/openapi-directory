from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetElectionsSummaryOfficeEnum(str, Enum):
    HOUSE = "house"
    SENATE = "senate"
    PRESIDENT = "president"


@dataclass
class GetElectionsSummaryQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    cycle: int = field(default=None, metadata={'query_param': { 'field_name': 'cycle', 'style': 'form', 'explode': True }})
    district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'district', 'style': 'form', 'explode': True }})
    election_full: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'election_full', 'style': 'form', 'explode': True }})
    office: GetElectionsSummaryOfficeEnum = field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetElectionsSummaryRequest:
    query_params: GetElectionsSummaryQueryParams = field(default=None)
    

@dataclass
class GetElectionsSummaryResponse:
    content_type: str = field(default=None)
    election_summary: Optional[shared.ElectionSummary] = field(default=None)
    status_code: int = field(default=None)
    
