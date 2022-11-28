from dataclasses import dataclass, field
from enum import Enum

class BlockOverrideDNSTypeEnum(str, Enum):
    CNAME = "CNAME"

