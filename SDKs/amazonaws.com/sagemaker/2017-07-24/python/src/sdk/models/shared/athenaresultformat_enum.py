from dataclasses import dataclass, field
from typing import Enum

class AthenaResultFormatEnum(str, Enum):
    PARQUET = "PARQUET"
    ORC = "ORC"
    AVRO = "AVRO"
    JSON = "JSON"
    TEXTFILE = "TEXTFILE"

