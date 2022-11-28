from dataclasses import dataclass, field
from enum import Enum

class DimensionValueSourceEnum(str, Enum):
    MESSAGE_TAG = "MESSAGE_TAG"
    EMAIL_HEADER = "EMAIL_HEADER"
    LINK_TAG = "LINK_TAG"

