from dataclasses import dataclass, field
from typing import Enum

class ClipFragmentSelectorTypeEnum(str, Enum):
    PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP"
    SERVER_TIMESTAMP = "SERVER_TIMESTAMP"

