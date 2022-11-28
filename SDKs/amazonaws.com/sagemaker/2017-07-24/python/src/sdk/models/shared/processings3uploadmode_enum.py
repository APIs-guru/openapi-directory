from dataclasses import dataclass, field
from enum import Enum

class ProcessingS3UploadModeEnum(str, Enum):
    CONTINUOUS = "Continuous"
    END_OF_JOB = "EndOfJob"

