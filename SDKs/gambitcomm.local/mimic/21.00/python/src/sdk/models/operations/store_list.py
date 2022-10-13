from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class StoreListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    store_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    
