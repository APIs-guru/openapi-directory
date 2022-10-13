from dataclasses import dataclass, field
from typing import Enum

class OutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

