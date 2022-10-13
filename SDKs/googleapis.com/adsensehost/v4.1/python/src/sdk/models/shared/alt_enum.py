from dataclasses import dataclass, field
from typing import Enum

class AltEnum(str, Enum):
    CSV = "csv"
    JSON = "json"

