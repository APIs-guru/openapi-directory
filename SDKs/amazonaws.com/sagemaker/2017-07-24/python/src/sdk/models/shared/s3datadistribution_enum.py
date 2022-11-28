from dataclasses import dataclass, field
from enum import Enum

class S3DataDistributionEnum(str, Enum):
    FULLY_REPLICATED = "FullyReplicated"
    SHARDED_BY_S3_KEY = "ShardedByS3Key"

