from dataclasses import dataclass, field
from enum import Enum

class SimpleCriterionKeyForJobEnum(str, Enum):
    ACCOUNT_ID = "ACCOUNT_ID"
    S3_BUCKET_NAME = "S3_BUCKET_NAME"
    S3_BUCKET_EFFECTIVE_PERMISSION = "S3_BUCKET_EFFECTIVE_PERMISSION"
    S3_BUCKET_SHARED_ACCESS = "S3_BUCKET_SHARED_ACCESS"

