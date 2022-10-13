from dataclasses import dataclass, field
from typing import Enum

class BoardRelationshipEnum(str, Enum):
    OWNED = "owned"
    INVITED = "invited"

