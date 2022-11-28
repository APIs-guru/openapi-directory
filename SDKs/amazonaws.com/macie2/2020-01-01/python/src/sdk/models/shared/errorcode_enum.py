from dataclasses import dataclass, field
from enum import Enum

class ErrorCodeEnum(str, Enum):
    CLIENT_ERROR = "ClientError"
    INTERNAL_ERROR = "InternalError"

