from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CfgSaveResponse:
    content_type: str = field()
    status_code: int = field()
    cfg_save_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
