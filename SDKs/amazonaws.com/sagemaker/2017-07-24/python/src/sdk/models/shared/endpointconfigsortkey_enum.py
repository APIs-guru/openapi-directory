from dataclasses import dataclass, field
from enum import Enum

class EndpointConfigSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

