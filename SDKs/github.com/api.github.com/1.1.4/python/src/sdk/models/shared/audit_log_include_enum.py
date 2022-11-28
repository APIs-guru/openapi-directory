from dataclasses import dataclass, field
from enum import Enum

class AuditLogIncludeEnum(str, Enum):
    WEB = "web"
    GIT = "git"
    ALL = "all"

