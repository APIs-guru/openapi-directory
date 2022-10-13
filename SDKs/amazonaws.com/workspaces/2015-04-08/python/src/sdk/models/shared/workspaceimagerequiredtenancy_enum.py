from dataclasses import dataclass, field
from typing import Enum

class WorkspaceImageRequiredTenancyEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEDICATED = "DEDICATED"

