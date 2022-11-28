from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentModelsContentPreview:
    item_in_set: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    path: Optional[str] = field(default=None)
    set_nesting: Optional[int] = field(default=None)
    set_tag: Optional[str] = field(default=None)
    use_set_id: Optional[int] = field(default=None)
    
