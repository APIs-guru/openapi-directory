from dataclasses import dataclass, field
from enum import Enum

class ListDeviceFleetsSortByEnum(str, Enum):
    NAME = "NAME"
    CREATION_TIME = "CREATION_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"

