from dataclasses import dataclass, field
from typing import Enum

class MigrationStrategyEnum(str, Enum):
    CREATE_NEW = "CREATE_NEW"
    UPDATE_EXISTING = "UPDATE_EXISTING"

