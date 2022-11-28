from dataclasses import dataclass, field
from enum import Enum

class ConditionOutcomeEnum(str, Enum):
    TRUE = "True"
    FALSE = "False"

