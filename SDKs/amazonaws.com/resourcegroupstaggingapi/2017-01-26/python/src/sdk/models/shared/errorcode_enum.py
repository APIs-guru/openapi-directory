from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    INTERNAL_SERVICE_EXCEPTION = "InternalServiceException"
    INVALID_PARAMETER_EXCEPTION = "InvalidParameterException"

