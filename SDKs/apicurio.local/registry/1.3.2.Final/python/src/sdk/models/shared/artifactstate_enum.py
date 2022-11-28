from dataclasses import dataclass, field
from enum import Enum

class ArtifactStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DEPRECATED = "DEPRECATED"
    DELETED = "DELETED"

