from dataclasses import dataclass, field
from enum import Enum

class DataShareStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING_AUTHORIZATION = "PENDING_AUTHORIZATION"
    AUTHORIZED = "AUTHORIZED"
    DEAUTHORIZED = "DEAUTHORIZED"
    REJECTED = "REJECTED"
    AVAILABLE = "AVAILABLE"

