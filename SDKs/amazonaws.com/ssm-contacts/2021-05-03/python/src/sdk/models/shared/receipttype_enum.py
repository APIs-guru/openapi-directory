from dataclasses import dataclass, field
from enum import Enum

class ReceiptTypeEnum(str, Enum):
    DELIVERED = "DELIVERED"
    ERROR = "ERROR"
    READ = "READ"
    SENT = "SENT"
    STOP = "STOP"

