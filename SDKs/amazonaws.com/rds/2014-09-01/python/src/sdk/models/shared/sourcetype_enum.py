from dataclasses import dataclass, field
from enum import Enum

class SourceTypeEnum(str, Enum):
    DB_INSTANCE = "db-instance"
    DB_PARAMETER_GROUP = "db-parameter-group"
    DB_SECURITY_GROUP = "db-security-group"
    DB_SNAPSHOT = "db-snapshot"

