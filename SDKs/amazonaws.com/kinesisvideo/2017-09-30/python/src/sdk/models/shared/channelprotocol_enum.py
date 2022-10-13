from dataclasses import dataclass, field
from typing import Enum

class ChannelProtocolEnum(str, Enum):
    WSS = "WSS"
    HTTPS = "HTTPS"

