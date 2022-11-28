from dataclasses import dataclass, field
from enum import Enum

class RequiresRecreationEnum(str, Enum):
    NEVER = "NEVER"
    CONDITIONALLY = "CONDITIONALLY"
    ALWAYS = "ALWAYS"

