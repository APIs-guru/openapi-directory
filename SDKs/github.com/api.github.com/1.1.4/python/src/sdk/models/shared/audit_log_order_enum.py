from dataclasses import dataclass, field
from enum import Enum

class AuditLogOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

