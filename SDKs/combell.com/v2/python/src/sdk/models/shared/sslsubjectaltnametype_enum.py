from dataclasses import dataclass, field
from typing import Enum

class SslSubjectAltNameTypeEnum(str, Enum):
    DNS = "dns"
    IP = "ip"

