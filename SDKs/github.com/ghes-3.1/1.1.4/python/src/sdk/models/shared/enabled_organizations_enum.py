from dataclasses import dataclass, field
from typing import Enum

class EnabledOrganizationsEnum(str, Enum):
    ALL = "all"
    NONE = "none"
    SELECTED = "selected"

