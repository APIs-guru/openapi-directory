from dataclasses import dataclass, field
from typing import Enum

class TypeHintEnum(str, Enum):
    JSON = "JSON"
    UUID = "UUID"
    TIMESTAMP = "TIMESTAMP"
    DATE = "DATE"
    TIME = "TIME"
    DECIMAL = "DECIMAL"

