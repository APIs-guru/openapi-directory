from dataclasses import dataclass, field
from typing import Enum

class S3DataTypeEnum(str, Enum):
    MANIFEST_FILE = "ManifestFile"
    S3_PREFIX = "S3Prefix"
    AUGMENTED_MANIFEST_FILE = "AugmentedManifestFile"

