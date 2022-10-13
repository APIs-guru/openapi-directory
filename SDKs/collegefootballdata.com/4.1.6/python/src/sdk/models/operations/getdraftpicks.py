from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDraftPicksQueryParams:
    college: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'college', 'style': 'form', 'explode': True }})
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    nfl_team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nflTeam', 'style': 'form', 'explode': True }})
    position: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDraftPicksRequest:
    query_params: GetDraftPicksQueryParams = field(default=None)
    

@dataclass
class GetDraftPicksResponse:
    content_type: str = field(default=None)
    draft_picks: Optional[List[shared.DraftPick]] = field(default=None)
    status_code: int = field(default=None)
    
