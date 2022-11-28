from dataclasses import dataclass, field
from enum import Enum

class RuleTypeEnum(str, Enum):
    ATLEAST = "ATLEAST"
    AND = "AND"
    OR = "OR"

