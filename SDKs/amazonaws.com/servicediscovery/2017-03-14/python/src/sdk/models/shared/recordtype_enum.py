from dataclasses import dataclass, field
from typing import Enum

class RecordTypeEnum(str, Enum):
    SRV = "SRV"
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"

