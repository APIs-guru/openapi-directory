from dataclasses import dataclass, field
from typing import Enum

class InstanceAccessProtocolEnum(str, Enum):
    SSH = "ssh"
    RDP = "rdp"

