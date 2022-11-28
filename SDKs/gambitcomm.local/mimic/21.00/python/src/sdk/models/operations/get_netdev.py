from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNetdevResponse:
    content_type: str = field()
    status_code: int = field()
    get_netdev_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
