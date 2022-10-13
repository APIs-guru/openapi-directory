from dataclasses import dataclass, field
from typing import Enum

class ShardIteratorTypeEnum(str, Enum):
    AT_SEQUENCE_NUMBER = "AT_SEQUENCE_NUMBER"
    AFTER_SEQUENCE_NUMBER = "AFTER_SEQUENCE_NUMBER"
    TRIM_HORIZON = "TRIM_HORIZON"
    LATEST = "LATEST"
    AT_TIMESTAMP = "AT_TIMESTAMP"

