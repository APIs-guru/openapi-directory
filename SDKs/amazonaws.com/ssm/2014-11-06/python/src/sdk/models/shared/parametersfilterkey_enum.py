from dataclasses import dataclass, field
from typing import Enum

class ParametersFilterKeyEnum(str, Enum):
    NAME = "Name"
    TYPE = "Type"
    KEY_ID = "KeyId"

