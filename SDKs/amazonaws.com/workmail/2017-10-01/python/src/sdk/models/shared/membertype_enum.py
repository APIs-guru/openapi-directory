from dataclasses import dataclass, field
from enum import Enum

class MemberTypeEnum(str, Enum):
    GROUP = "GROUP"
    USER = "USER"

