from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ContentModelsTagMetadataDefinition:
    datatype: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    is_required: Optional[bool] = field(default=None)
    items: Optional[List[ContentModelsTagMetadataItem]] = field(default=None)
    name: Optional[str] = field(default=None)
    order: Optional[int] = field(default=None)
    
