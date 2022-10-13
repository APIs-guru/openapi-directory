from dataclasses import dataclass, field
from typing import Enum

class QualificationStatusEnum(str, Enum):
    GRANTED = "Granted"
    REVOKED = "Revoked"

