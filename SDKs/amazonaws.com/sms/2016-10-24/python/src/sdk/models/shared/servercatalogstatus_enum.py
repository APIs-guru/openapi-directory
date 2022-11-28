from dataclasses import dataclass, field
from enum import Enum

class ServerCatalogStatusEnum(str, Enum):
    NOT_IMPORTED = "NOT_IMPORTED"
    IMPORTING = "IMPORTING"
    AVAILABLE = "AVAILABLE"
    DELETED = "DELETED"
    EXPIRED = "EXPIRED"

