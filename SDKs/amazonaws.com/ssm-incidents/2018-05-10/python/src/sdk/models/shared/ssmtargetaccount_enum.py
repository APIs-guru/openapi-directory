from dataclasses import dataclass, field
from typing import Enum

class SsmTargetAccountEnum(str, Enum):
    RESPONSE_PLAN_OWNER_ACCOUNT = "RESPONSE_PLAN_OWNER_ACCOUNT"
    IMPACTED_ACCOUNT = "IMPACTED_ACCOUNT"

