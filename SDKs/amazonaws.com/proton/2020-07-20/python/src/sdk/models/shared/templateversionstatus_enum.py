from dataclasses import dataclass, field
from typing import Enum

class TemplateVersionStatusEnum(str, Enum):
    REGISTRATION_IN_PROGRESS = "REGISTRATION_IN_PROGRESS"
    REGISTRATION_FAILED = "REGISTRATION_FAILED"
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

