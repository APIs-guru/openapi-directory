from dataclasses import dataclass, field
from enum import Enum

class IamUserAccessToBillingEnum(str, Enum):
    ALLOW = "ALLOW"
    DENY = "DENY"

