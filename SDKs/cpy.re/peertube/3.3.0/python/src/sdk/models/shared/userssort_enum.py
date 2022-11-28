from dataclasses import dataclass, field
from enum import Enum

class UsersSortEnum(str, Enum):
    MINUS_ID = "-id"
    MINUS_USERNAME = "-username"
    MINUS_CREATED_AT = "-createdAt"

