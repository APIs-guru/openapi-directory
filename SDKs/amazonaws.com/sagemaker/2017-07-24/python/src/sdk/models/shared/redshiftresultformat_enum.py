from dataclasses import dataclass, field
from enum import Enum

class RedshiftResultFormatEnum(str, Enum):
    PARQUET = "PARQUET"
    CSV = "CSV"

