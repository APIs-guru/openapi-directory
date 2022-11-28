from dataclasses import dataclass, field
from enum import Enum

class DocumentFormatEnum(str, Enum):
    YAML = "YAML"
    JSON = "JSON"
    TEXT = "TEXT"

