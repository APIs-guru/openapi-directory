from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TagsModelsContractsTagResponse:
    ignore_status: Optional[IgnoresIgnoreResponse] = field(default=None)
    tag_text: Optional[str] = field(default=None)
    
