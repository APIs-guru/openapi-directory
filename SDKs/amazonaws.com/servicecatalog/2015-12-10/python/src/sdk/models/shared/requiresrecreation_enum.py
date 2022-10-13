from dataclasses import dataclass, field
from typing import Enum

class RequiresRecreationEnum(str, Enum):
    NEVER = "NEVER"
    CONDITIONALLY = "CONDITIONALLY"
    ALWAYS = "ALWAYS"

