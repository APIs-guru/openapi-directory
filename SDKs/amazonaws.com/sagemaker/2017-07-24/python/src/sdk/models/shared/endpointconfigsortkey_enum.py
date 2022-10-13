from dataclasses import dataclass, field
from typing import Enum

class EndpointConfigSortKeyEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"

