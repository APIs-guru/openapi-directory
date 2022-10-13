from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetNflTeamsResponse:
    content_type: str = field(default=None)
    draft_teams: Optional[List[shared.DraftTeam]] = field(default=None)
    status_code: int = field(default=None)
    
