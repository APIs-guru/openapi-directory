from dataclasses import dataclass, field
from enum import Enum

class BoardRelationshipEnum(str, Enum):
    OWNED = "owned"
    INVITED = "invited"

