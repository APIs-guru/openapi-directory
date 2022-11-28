from dataclasses import dataclass, field
from enum import Enum

class StartSelectorTypeEnum(str, Enum):
    FRAGMENT_NUMBER = "FRAGMENT_NUMBER"
    SERVER_TIMESTAMP = "SERVER_TIMESTAMP"
    PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP"
    NOW = "NOW"
    EARLIEST = "EARLIEST"
    CONTINUATION_TOKEN = "CONTINUATION_TOKEN"

