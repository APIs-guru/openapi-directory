from dataclasses import dataclass, field
from typing import Enum

class CloudWatchLogsTimeZoneEnum(str, Enum):
    LOCAL = "LOCAL"
    UTC = "UTC"

