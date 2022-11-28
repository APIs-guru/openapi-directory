from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ContentModelsTagMetadataItem:
    description: Optional[str] = field(default=None)
    groups: Optional[List[str]] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    name: Optional[str] = field(default=None)
    tag_text: Optional[str] = field(default=None)
    
