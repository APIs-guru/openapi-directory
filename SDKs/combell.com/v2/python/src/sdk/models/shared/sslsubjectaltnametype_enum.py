from dataclasses import dataclass, field
from enum import Enum

class SslSubjectAltNameTypeEnum(str, Enum):
    DNS = "dns"
    IP = "ip"

