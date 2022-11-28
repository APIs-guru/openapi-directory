from dataclasses import dataclass, field
from enum import Enum

class FulfillmentActivityTypeEnum(str, Enum):
    RETURN_INTENT = "ReturnIntent"
    CODE_HOOK = "CodeHook"

