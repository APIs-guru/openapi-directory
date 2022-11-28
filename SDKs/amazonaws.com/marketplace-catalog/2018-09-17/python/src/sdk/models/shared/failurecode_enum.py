from dataclasses import dataclass, field
from enum import Enum

class FailureCodeEnum(str, Enum):
    CLIENT_ERROR = "CLIENT_ERROR"
    SERVER_FAULT = "SERVER_FAULT"

