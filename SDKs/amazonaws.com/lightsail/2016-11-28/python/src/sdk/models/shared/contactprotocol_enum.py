from dataclasses import dataclass, field
from enum import Enum

class ContactProtocolEnum(str, Enum):
    EMAIL = "Email"
    SMS = "SMS"

