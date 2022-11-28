from dataclasses import dataclass, field
from enum import Enum

class ParametersFilterKeyEnum(str, Enum):
    NAME = "Name"
    TYPE = "Type"
    KEY_ID = "KeyId"

