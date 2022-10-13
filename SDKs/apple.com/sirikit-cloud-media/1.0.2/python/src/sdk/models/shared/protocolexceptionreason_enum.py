from dataclasses import dataclass, field
from typing import Enum

class ProtocolExceptionReasonEnum(str, Enum):
    UNSUPPORTED = "unsupported"
    UNAUTHORIZED = "unauthorized"
    UNEXPECTED = "unexpected"
    INVALID = "invalid"
    UNPARSEABLE = "unparseable"
    DEPRECATED = "deprecated"
    INTERNAL = "internal"
    COMPLEX = "complex"
    BUSY = "busy"

