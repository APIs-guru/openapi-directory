from dataclasses import dataclass, field
from enum import Enum

class ShardIteratorTypeEnum(str, Enum):
    TRIM_HORIZON = "TRIM_HORIZON"
    LATEST = "LATEST"
    AT_SEQUENCE_NUMBER = "AT_SEQUENCE_NUMBER"
    AFTER_SEQUENCE_NUMBER = "AFTER_SEQUENCE_NUMBER"

