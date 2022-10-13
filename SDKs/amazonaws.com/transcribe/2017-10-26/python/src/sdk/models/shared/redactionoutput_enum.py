from dataclasses import dataclass, field
from typing import Enum

class RedactionOutputEnum(str, Enum):
    REDACTED = "redacted"
    REDACTED_AND_UNREDACTED = "redacted_and_unredacted"

