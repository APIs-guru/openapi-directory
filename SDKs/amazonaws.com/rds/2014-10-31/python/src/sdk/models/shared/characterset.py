from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CharacterSet:
    r"""CharacterSet
     This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>. 
    """
    
    character_set_description: Optional[str] = field(default=None)
    character_set_name: Optional[str] = field(default=None)
    
