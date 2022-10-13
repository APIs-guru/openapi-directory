from dataclasses import dataclass, field
from typing import Enum

class RuleTypeEnum(str, Enum):
    ATLEAST = "ATLEAST"
    AND = "AND"
    OR = "OR"

