from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTalentQueryParams:
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTalentRequest:
    query_params: GetTalentQueryParams = field()
    

@dataclass
class GetTalentResponse:
    content_type: str = field()
    status_code: int = field()
    team_talents: Optional[List[shared.TeamTalent]] = field(default=None)
    
