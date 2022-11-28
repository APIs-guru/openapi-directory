from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCfgFileChangedResponse:
    content_type: str = field()
    status_code: int = field()
    get_cfg_file_changed_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
