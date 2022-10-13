from dataclasses import dataclass, field
from typing import Enum

class DataDistributionTypeEnum(str, Enum):
    FULLY_REPLICATED = "FullyReplicated"
    SHARDED_BY_S3_KEY = "ShardedByS3Key"

