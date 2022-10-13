from dataclasses import dataclass, field
from typing import Enum

class RedactionTypeEnum(str, Enum):
    PII = "PII"

