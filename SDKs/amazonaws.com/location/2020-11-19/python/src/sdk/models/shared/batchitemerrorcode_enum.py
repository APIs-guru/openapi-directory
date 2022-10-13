from dataclasses import dataclass, field
from typing import Enum

class BatchItemErrorCodeEnum(str, Enum):
    ACCESS_DENIED_ERROR = "AccessDeniedError"
    CONFLICT_ERROR = "ConflictError"
    INTERNAL_SERVER_ERROR = "InternalServerError"
    RESOURCE_NOT_FOUND_ERROR = "ResourceNotFoundError"
    THROTTLING_ERROR = "ThrottlingError"
    VALIDATION_ERROR = "ValidationError"

