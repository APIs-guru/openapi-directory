from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StartAllAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    start_all_agents_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
