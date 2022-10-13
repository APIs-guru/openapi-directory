from dataclasses import dataclass, field
from typing import Enum

class BucketMetricNameEnum(str, Enum):
    BUCKET_SIZE_BYTES = "BucketSizeBytes"
    NUMBER_OF_OBJECTS = "NumberOfObjects"

