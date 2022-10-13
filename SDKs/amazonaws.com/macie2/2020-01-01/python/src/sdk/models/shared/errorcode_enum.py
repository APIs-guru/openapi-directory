from dataclasses import dataclass, field
from typing import Enum

class ErrorCodeEnum(str, Enum):
    CLIENT_ERROR = "ClientError"
    INTERNAL_ERROR = "InternalError"

