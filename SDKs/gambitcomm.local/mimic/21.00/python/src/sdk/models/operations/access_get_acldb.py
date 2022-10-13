from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessGetAcldbResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_get_acldb_200_application_json_string: Optional[str] = field(default=None)
    
