from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetChangedConfigListResponse:
    content_type: str = field()
    status_code: int = field()
    get_changed_config_list_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
