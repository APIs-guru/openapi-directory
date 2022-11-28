from dataclasses import dataclass, field
from enum import Enum

class InstanceAccessProtocolEnum(str, Enum):
    SSH = "ssh"
    RDP = "rdp"

