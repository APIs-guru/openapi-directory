from dataclasses import dataclass, field
from enum import Enum

class BucketMetricNameEnum(str, Enum):
    BUCKET_SIZE_BYTES = "BucketSizeBytes"
    NUMBER_OF_OBJECTS = "NumberOfObjects"

