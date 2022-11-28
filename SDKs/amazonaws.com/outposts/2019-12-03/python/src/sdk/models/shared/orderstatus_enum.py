from dataclasses import dataclass, field
from enum import Enum

class OrderStatusEnum(str, Enum):
    RECEIVED = "RECEIVED"
    PENDING = "PENDING"
    PROCESSING = "PROCESSING"
    INSTALLING = "INSTALLING"
    FULFILLED = "FULFILLED"
    CANCELLED = "CANCELLED"

