from dataclasses import dataclass, field
from typing import Enum,List

class ListDeviceFleetsSortByEnum(str, Enum):
    NAME = "NAME"
    CREATION_TIME = "CREATION_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

