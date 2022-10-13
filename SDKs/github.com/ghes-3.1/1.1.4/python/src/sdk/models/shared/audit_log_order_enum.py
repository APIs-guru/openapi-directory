from dataclasses import dataclass, field
from typing import Enum

class AuditLogOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

