from dataclasses import dataclass, field
from enum import Enum

class EnabledOrganizationsEnum(str, Enum):
    ALL = "all"
    NONE = "none"
    SELECTED = "selected"

