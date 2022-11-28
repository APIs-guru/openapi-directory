from dataclasses import dataclass, field
from enum import Enum

class BlacklistsSortEnum(str, Enum):
    MINUS_ID = "-id"
    NAME = "name"
    MINUS_DURATION = "-duration"
    MINUS_VIEWS = "-views"
    MINUS_LIKES = "-likes"
    MINUS_DISLIKES = "-dislikes"
    MINUS_UUID = "-uuid"
    MINUS_CREATED_AT = "-createdAt"

