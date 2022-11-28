from dataclasses import dataclass, field
from enum import Enum

class RequestStatusEnum(str, Enum):
    PENDING = "PENDING"
    CASE_OPENED = "CASE_OPENED"
    APPROVED = "APPROVED"
    DENIED = "DENIED"
    CASE_CLOSED = "CASE_CLOSED"

