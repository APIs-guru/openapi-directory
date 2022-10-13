from dataclasses import dataclass, field
from typing import Enum,List

class SuppressionListImportActionEnum(str, Enum):
    DELETE = "DELETE"
    PUT = "PUT"

