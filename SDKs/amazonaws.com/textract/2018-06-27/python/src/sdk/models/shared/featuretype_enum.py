from dataclasses import dataclass, field
from enum import Enum

class FeatureTypeEnum(str, Enum):
    TABLES = "TABLES"
    FORMS = "FORMS"

