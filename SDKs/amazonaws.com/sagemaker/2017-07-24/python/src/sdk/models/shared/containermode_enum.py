from dataclasses import dataclass, field
from typing import Enum

class ContainerModeEnum(str, Enum):
    SINGLE_MODEL = "SingleModel"
    MULTI_MODEL = "MultiModel"

