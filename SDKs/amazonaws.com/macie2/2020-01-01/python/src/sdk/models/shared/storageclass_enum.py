from dataclasses import dataclass, field
from enum import Enum

class StorageClassEnum(str, Enum):
    STANDARD = "STANDARD"
    REDUCED_REDUNDANCY = "REDUCED_REDUNDANCY"
    STANDARD_IA = "STANDARD_IA"
    INTELLIGENT_TIERING = "INTELLIGENT_TIERING"
    DEEP_ARCHIVE = "DEEP_ARCHIVE"
    ONEZONE_IA = "ONEZONE_IA"
    GLACIER = "GLACIER"

