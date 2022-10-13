from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTalentQueryParams:
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTalentRequest:
    query_params: GetTalentQueryParams = field(default=None)
    

@dataclass
class GetTalentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_talents: Optional[List[shared.TeamTalent]] = field(default=None)
    
