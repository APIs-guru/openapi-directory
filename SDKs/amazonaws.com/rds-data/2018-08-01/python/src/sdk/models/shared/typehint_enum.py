from dataclasses import dataclass, field
from enum import Enum

class TypeHintEnum(str, Enum):
    JSON = "JSON"
    UUID = "UUID"
    TIMESTAMP = "TIMESTAMP"
    DATE = "DATE"
    TIME = "TIME"
    DECIMAL = "DECIMAL"

