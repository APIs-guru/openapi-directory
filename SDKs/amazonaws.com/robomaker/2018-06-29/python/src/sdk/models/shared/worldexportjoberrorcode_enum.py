from dataclasses import dataclass, field
from enum import Enum

class WorldExportJobErrorCodeEnum(str, Enum):
    INTERNAL_SERVICE_ERROR = "InternalServiceError"
    LIMIT_EXCEEDED = "LimitExceeded"
    RESOURCE_NOT_FOUND = "ResourceNotFound"
    REQUEST_THROTTLED = "RequestThrottled"
    INVALID_INPUT = "InvalidInput"
    ACCESS_DENIED = "AccessDenied"

