from dataclasses import dataclass, field
from enum import Enum

class OutputFormatEnum(str, Enum):
    JSON = "JSON"
    YAML = "YAML"

