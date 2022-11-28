from dataclasses import dataclass, field
from enum import Enum

class SsmTargetAccountEnum(str, Enum):
    RESPONSE_PLAN_OWNER_ACCOUNT = "RESPONSE_PLAN_OWNER_ACCOUNT"
    IMPACTED_ACCOUNT = "IMPACTED_ACCOUNT"

