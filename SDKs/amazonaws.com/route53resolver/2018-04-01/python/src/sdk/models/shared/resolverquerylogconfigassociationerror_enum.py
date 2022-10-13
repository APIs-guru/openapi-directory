from dataclasses import dataclass, field
from typing import Enum

class ResolverQueryLogConfigAssociationErrorEnum(str, Enum):
    NONE = "NONE"
    DESTINATION_NOT_FOUND = "DESTINATION_NOT_FOUND"
    ACCESS_DENIED = "ACCESS_DENIED"
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR"

