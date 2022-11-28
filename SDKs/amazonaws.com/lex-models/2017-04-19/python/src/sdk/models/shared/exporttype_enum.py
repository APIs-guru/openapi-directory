from dataclasses import dataclass, field
from enum import Enum

class ExportTypeEnum(str, Enum):
    ALEXA_SKILLS_KIT = "ALEXA_SKILLS_KIT"
    LEX = "LEX"

