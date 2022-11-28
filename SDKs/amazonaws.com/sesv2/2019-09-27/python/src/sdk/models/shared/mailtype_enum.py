from dataclasses import dataclass, field
from enum import Enum

class MailTypeEnum(str, Enum):
    MARKETING = "MARKETING"
    TRANSACTIONAL = "TRANSACTIONAL"

