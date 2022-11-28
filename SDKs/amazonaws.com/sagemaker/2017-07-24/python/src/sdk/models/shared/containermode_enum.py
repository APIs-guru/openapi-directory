from dataclasses import dataclass, field
from enum import Enum

class ContainerModeEnum(str, Enum):
    SINGLE_MODEL = "SingleModel"
    MULTI_MODEL = "MultiModel"

