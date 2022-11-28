from dataclasses import dataclass, field
from enum import Enum

class SuppressionListImportActionEnum(str, Enum):
    DELETE = "DELETE"
    PUT = "PUT"

