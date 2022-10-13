from dataclasses import dataclass, field
from typing import Enum

class ConditionOutcomeEnum(str, Enum):
    TRUE = "True"
    FALSE = "False"

