from dataclasses import dataclass, field
from typing import Enum

class ChannelRoleEnum(str, Enum):
    MASTER = "MASTER"
    VIEWER = "VIEWER"

