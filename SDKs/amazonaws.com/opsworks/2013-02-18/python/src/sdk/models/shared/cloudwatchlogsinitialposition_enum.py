from dataclasses import dataclass, field
from enum import Enum

class CloudWatchLogsInitialPositionEnum(str, Enum):
    START_OF_FILE = "start_of_file"
    END_OF_FILE = "end_of_file"

