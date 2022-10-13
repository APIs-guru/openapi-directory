from dataclasses import dataclass, field
from typing import Enum

class SavingsPlanRateUnitEnum(str, Enum):
    HRS = "Hrs"
    LAMBDA_GB_SECOND = "Lambda-GB-Second"
    REQUEST = "Request"

