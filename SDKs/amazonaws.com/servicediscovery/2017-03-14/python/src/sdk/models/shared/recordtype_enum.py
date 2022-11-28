from dataclasses import dataclass, field
from enum import Enum

class RecordTypeEnum(str, Enum):
    SRV = "SRV"
    A = "A"
    AAAA = "AAAA"
    CNAME = "CNAME"

