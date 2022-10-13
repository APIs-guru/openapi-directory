from dataclasses import dataclass, field
from typing import Enum

class RelationalDatabaseEngineEnum(str, Enum):
    MYSQL = "mysql"

