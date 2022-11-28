from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CharacterSet:
    r"""CharacterSet
    Specifies a character set.
    """
    
    character_set_description: Optional[str] = field(default=None)
    character_set_name: Optional[str] = field(default=None)
    
