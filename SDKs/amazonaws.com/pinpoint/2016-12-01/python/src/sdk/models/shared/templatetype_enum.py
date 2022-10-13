from dataclasses import dataclass, field
from typing import Enum

class TemplateTypeEnum(str, Enum):
    EMAIL = "EMAIL"
    SMS = "SMS"
    VOICE = "VOICE"
    PUSH = "PUSH"
    INAPP = "INAPP"

