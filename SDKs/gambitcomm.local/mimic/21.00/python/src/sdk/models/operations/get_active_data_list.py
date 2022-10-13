from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetActiveDataListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_active_data_list_200_application_json_int32_integers: Optional[List[int]] = field(default=None)
    
