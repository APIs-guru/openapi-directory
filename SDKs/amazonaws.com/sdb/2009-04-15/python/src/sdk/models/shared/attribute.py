from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Attribute:
    name: str = field()
    value: str = field()
    alternate_name_encoding: Optional[str] = field(default=None)
    alternate_value_encoding: Optional[str] = field(default=None)
    
