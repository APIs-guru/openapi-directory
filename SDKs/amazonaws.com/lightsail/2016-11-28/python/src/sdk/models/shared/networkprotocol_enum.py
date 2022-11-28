from dataclasses import dataclass, field
from enum import Enum

class NetworkProtocolEnum(str, Enum):
    TCP = "tcp"
    ALL = "all"
    UDP = "udp"
    ICMP = "icmp"

