from dataclasses import dataclass, field
from enum import Enum

class ChannelRoleEnum(str, Enum):
    MASTER = "MASTER"
    VIEWER = "VIEWER"

