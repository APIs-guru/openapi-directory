from dataclasses import dataclass, field
from typing import Enum

class ContactProtocolEnum(str, Enum):
    EMAIL = "Email"
    SMS = "SMS"

