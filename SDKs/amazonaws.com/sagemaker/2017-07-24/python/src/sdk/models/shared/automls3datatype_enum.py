from dataclasses import dataclass, field
from enum import Enum

class AutoMls3DataTypeEnum(str, Enum):
    MANIFEST_FILE = "ManifestFile"
    S3_PREFIX = "S3Prefix"

