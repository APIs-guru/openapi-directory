from dataclasses import dataclass, field
from typing import Enum

class RebootOptionEnum(str, Enum):
    REBOOT_IF_NEEDED = "RebootIfNeeded"
    NO_REBOOT = "NoReboot"

