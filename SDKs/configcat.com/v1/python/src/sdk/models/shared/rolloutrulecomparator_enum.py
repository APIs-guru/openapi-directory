from dataclasses import dataclass, field
from typing import Enum

class RolloutRuleComparatorEnum(str, Enum):
    IS_ONE_OF = "isOneOf"
    IS_NOT_ONE_OF = "isNotOneOf"
    CONTAINS = "contains"
    DOES_NOT_CONTAIN = "doesNotContain"
    SEM_VER_IS_ONE_OF = "semVerIsOneOf"
    SEM_VER_IS_NOT_ONE_OF = "semVerIsNotOneOf"
    SEM_VER_LESS = "semVerLess"
    SEM_VER_LESS_OR_EQUALS = "semVerLessOrEquals"
    SEM_VER_GREATER = "semVerGreater"
    SEM_VER_GREATER_OR_EQUALS = "semVerGreaterOrEquals"
    NUMBER_EQUALS = "numberEquals"
    NUMBER_DOES_NOT_EQUAL = "numberDoesNotEqual"
    NUMBER_LESS = "numberLess"
    NUMBER_LESS_OR_EQUALS = "numberLessOrEquals"
    NUMBER_GREATER = "numberGreater"
    NUMBER_GREATER_OR_EQUALS = "numberGreaterOrEquals"
    SENSITIVE_IS_ONE_OF = "sensitiveIsOneOf"
    SENSITIVE_IS_NOT_ONE_OF = "sensitiveIsNotOneOf"

