from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class CommonModelsCoreSetting:
    child_settings: Optional[List[CommonModelsCoreSetting]] = field(default=None)
    display_name: Optional[str] = field(default=None)
    identifier: Optional[str] = field(default=None)
    image_path: Optional[str] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    summary: Optional[str] = field(default=None)
    
