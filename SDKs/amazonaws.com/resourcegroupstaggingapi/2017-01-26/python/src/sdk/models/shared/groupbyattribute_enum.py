from dataclasses import dataclass, field
from typing import Enum

class GroupByAttributeEnum(str, Enum):
    TARGET_ID = "TARGET_ID"
    REGION = "REGION"
    RESOURCE_TYPE = "RESOURCE_TYPE"

