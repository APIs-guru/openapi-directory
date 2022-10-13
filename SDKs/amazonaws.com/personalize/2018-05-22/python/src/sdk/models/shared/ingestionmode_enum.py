from dataclasses import dataclass, field
from typing import Enum

class IngestionModeEnum(str, Enum):
    BULK = "BULK"
    PUT = "PUT"
    ALL = "ALL"

