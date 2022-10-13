from dataclasses import dataclass, field
from typing import Enum

class ContactTypeEnum(str, Enum):
    PERSONAL = "PERSONAL"
    ESCALATION = "ESCALATION"

