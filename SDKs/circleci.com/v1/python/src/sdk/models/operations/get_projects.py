from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    projects: Optional[List[shared.Project]] = field(default=None)
    
