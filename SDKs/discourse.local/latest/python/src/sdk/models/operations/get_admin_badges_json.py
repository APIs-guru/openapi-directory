from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdminBadgesJSONResponse:
    content_type: str = field(default=None)
    get_admin_badges_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
