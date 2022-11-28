from dataclasses import dataclass, field
from enum import Enum

class FilterNameStringTypeEnum(str, Enum):
    DESCRIPTION = "description"
    NAME = "name"
    TAG_KEY = "tag-key"
    TAG_VALUE = "tag-value"
    PRIMARY_REGION = "primary-region"
    ALL = "all"

