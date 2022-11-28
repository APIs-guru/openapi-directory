from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentModelsContentTypePropertySection:
    collapsed: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    readable_name: Optional[str] = field(default=None)
    
