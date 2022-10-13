from dataclasses import dataclass, field
from typing import Enum

class RedshiftResultFormatEnum(str, Enum):
    PARQUET = "PARQUET"
    CSV = "CSV"

