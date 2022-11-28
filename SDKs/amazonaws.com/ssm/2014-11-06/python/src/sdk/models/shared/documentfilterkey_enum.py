from dataclasses import dataclass, field
from enum import Enum

class DocumentFilterKeyEnum(str, Enum):
    NAME = "Name"
    OWNER = "Owner"
    PLATFORM_TYPES = "PlatformTypes"
    DOCUMENT_TYPE = "DocumentType"

