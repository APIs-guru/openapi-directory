from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetNetdevResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_netdev_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
