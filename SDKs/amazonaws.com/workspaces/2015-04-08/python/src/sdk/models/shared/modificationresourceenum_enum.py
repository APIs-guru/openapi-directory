from dataclasses import dataclass, field
from typing import Enum

class ModificationResourceEnumEnum(str, Enum):
    ROOT_VOLUME = "ROOT_VOLUME"
    USER_VOLUME = "USER_VOLUME"
    COMPUTE_TYPE = "COMPUTE_TYPE"

