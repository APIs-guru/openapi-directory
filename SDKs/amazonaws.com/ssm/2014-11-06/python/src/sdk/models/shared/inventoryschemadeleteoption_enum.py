from dataclasses import dataclass, field
from typing import Enum

class InventorySchemaDeleteOptionEnum(str, Enum):
    DISABLE_SCHEMA = "DisableSchema"
    DELETE_SCHEMA = "DeleteSchema"

