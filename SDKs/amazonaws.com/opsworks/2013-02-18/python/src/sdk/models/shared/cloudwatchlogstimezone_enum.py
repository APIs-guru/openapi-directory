from dataclasses import dataclass, field
from enum import Enum

class CloudWatchLogsTimeZoneEnum(str, Enum):
    LOCAL = "LOCAL"
    UTC = "UTC"

