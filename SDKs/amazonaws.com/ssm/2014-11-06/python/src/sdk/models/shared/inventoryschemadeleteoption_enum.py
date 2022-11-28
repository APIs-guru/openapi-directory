from dataclasses import dataclass, field
from enum import Enum

class InventorySchemaDeleteOptionEnum(str, Enum):
    DISABLE_SCHEMA = "DisableSchema"
    DELETE_SCHEMA = "DeleteSchema"

