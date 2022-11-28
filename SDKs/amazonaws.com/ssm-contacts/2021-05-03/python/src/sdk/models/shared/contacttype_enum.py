from dataclasses import dataclass, field
from enum import Enum

class ContactTypeEnum(str, Enum):
    PERSONAL = "PERSONAL"
    ESCALATION = "ESCALATION"

