from dataclasses import dataclass, field
from enum import Enum

class ServiceActionAssociationErrorCodeEnum(str, Enum):
    DUPLICATE_RESOURCE = "DUPLICATE_RESOURCE"
    INTERNAL_FAILURE = "INTERNAL_FAILURE"
    LIMIT_EXCEEDED = "LIMIT_EXCEEDED"
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
    THROTTLING = "THROTTLING"

