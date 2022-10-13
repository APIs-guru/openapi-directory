from dataclasses import dataclass, field
from typing import Enum

class FeatureTypeEnum(str, Enum):
    TABLES = "TABLES"
    FORMS = "FORMS"

