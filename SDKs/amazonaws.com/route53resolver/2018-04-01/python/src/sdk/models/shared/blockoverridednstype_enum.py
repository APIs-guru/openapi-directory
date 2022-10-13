from dataclasses import dataclass, field
from typing import Enum

class BlockOverrideDNSTypeEnum(str, Enum):
    CNAME = "CNAME"

