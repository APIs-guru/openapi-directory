from dataclasses import dataclass, field
from typing import Enum

class DocumentFormatEnum(str, Enum):
    YAML = "YAML"
    JSON = "JSON"
    TEXT = "TEXT"

