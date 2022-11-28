from dataclasses import dataclass, field
from enum import Enum

class ArtifactSourceIDTypeEnum(str, Enum):
    MD5_HASH = "MD5Hash"
    S3_E_TAG = "S3ETag"
    S3_VERSION = "S3Version"
    CUSTOM = "Custom"

