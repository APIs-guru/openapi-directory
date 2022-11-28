from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdminBadgesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_badges_json_200_application_json_any: Optional[Any] = field(default=None)
    
