from dataclasses import dataclass, field
from typing import Enum

class IamUserAccessToBillingEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

