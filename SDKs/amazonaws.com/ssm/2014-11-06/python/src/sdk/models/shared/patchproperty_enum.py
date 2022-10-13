from dataclasses import dataclass, field
from typing import Enum

class PatchPropertyEnum(str, Enum):
    PRODUCT = "PRODUCT"
    PRODUCT_FAMILY = "PRODUCT_FAMILY"
    CLASSIFICATION = "CLASSIFICATION"
    MSRC_SEVERITY = "MSRC_SEVERITY"
    PRIORITY = "PRIORITY"
    SEVERITY = "SEVERITY"

