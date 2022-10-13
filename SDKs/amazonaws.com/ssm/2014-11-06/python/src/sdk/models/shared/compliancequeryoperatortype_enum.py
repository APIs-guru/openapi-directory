from dataclasses import dataclass, field
from typing import Enum

class ComplianceQueryOperatorTypeEnum(str, Enum):
    EQUAL = "EQUAL"
    NOT_EQUAL = "NOT_EQUAL"
    BEGIN_WITH = "BEGIN_WITH"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN = "GREATER_THAN"

