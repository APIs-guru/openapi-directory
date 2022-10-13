from dataclasses import dataclass, field
from typing import Enum

class ParallelDataFormatEnum(str, Enum):
    TSV = "TSV"
    CSV = "CSV"
    TMX = "TMX"

