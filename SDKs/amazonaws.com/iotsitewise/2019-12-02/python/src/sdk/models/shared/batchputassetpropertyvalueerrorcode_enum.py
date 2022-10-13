from dataclasses import dataclass, field
from typing import Enum

class BatchPutAssetPropertyValueErrorCodeEnum(str, Enum):
    RESOURCE_NOT_FOUND_EXCEPTION = "ResourceNotFoundException"
    INVALID_REQUEST_EXCEPTION = "InvalidRequestException"
    INTERNAL_FAILURE_EXCEPTION = "InternalFailureException"
    SERVICE_UNAVAILABLE_EXCEPTION = "ServiceUnavailableException"
    THROTTLING_EXCEPTION = "ThrottlingException"
    LIMIT_EXCEEDED_EXCEPTION = "LimitExceededException"
    CONFLICTING_OPERATION_EXCEPTION = "ConflictingOperationException"
    TIMESTAMP_OUT_OF_RANGE_EXCEPTION = "TimestampOutOfRangeException"
    ACCESS_DENIED_EXCEPTION = "AccessDeniedException"

