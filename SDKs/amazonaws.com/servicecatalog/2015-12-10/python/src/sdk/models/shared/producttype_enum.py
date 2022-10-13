from dataclasses import dataclass, field
from typing import Enum

class ProductTypeEnum(str, Enum):
    CLOUD_FORMATION_TEMPLATE = "CLOUD_FORMATION_TEMPLATE"
    MARKETPLACE = "MARKETPLACE"

