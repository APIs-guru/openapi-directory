from dataclasses import dataclass, field
from typing import Enum

class MemberTypeEnum(str, Enum):
    GROUP = "GROUP"
    USER = "USER"

