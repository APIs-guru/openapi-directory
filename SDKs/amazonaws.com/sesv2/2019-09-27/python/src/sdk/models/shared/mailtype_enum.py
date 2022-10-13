from dataclasses import dataclass, field
from typing import Enum

class MailTypeEnum(str, Enum):
    MARKETING = "MARKETING"
    TRANSACTIONAL = "TRANSACTIONAL"

