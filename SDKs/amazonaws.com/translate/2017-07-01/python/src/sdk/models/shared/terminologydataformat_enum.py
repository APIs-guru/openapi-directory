from dataclasses import dataclass, field
from typing import Enum

class TerminologyDataFormatEnum(str, Enum):
    CSV = "CSV"
    TMX = "TMX"

