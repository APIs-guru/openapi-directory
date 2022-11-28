from dataclasses import dataclass, field
from enum import Enum

class WorkspaceImageRequiredTenancyEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEDICATED = "DEDICATED"

