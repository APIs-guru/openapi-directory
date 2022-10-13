from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsResponse:
    content_type: str = field(default=None)
    projects: Optional[List[shared.Project]] = field(default=None)
    status_code: int = field(default=None)
    
