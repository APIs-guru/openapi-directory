from dataclasses import dataclass, field
from typing import Enum

class OrderByEnum(str, Enum):
    LOG_STREAM_NAME = "LogStreamName"
    LAST_EVENT_TIME = "LastEventTime"

