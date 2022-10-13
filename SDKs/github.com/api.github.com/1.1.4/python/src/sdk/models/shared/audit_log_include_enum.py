from dataclasses import dataclass, field
from typing import Enum

class AuditLogIncludeEnum(str, Enum):
    WEB = "web"
    GIT = "git"
    ALL = "all"

