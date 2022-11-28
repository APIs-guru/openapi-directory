from dataclasses import dataclass, field
from enum import Enum

class RedactionTypeEnum(str, Enum):
    PII = "PII"

