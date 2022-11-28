from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Item:
    attributes: List[Attribute] = field()
    name: str = field()
    alternate_name_encoding: Optional[str] = field(default=None)
    
