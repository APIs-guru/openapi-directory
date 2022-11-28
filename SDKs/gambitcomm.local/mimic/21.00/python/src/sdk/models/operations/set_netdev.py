from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetNetdevResponse:
    content_type: str = field()
    status_code: int = field()
    set_netdev_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
