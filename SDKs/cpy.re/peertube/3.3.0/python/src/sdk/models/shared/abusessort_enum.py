from dataclasses import dataclass, field
from enum import Enum

class AbusesSortEnum(str, Enum):
    MINUS_ID = "-id"
    MINUS_CREATED_AT = "-createdAt"
    MINUS_STATE = "-state"

