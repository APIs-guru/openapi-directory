from dataclasses import dataclass, field
from enum import Enum

class AltEnum(str, Enum):
    CSV = "csv"
    JSON = "json"

