from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetAttributesResult:
    attributes: Optional[List[Attribute]] = field(default=None)
    
