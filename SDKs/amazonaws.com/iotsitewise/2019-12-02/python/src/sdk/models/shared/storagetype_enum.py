from dataclasses import dataclass, field
from enum import Enum

class StorageTypeEnum(str, Enum):
    SITEWISE_DEFAULT_STORAGE = "SITEWISE_DEFAULT_STORAGE"
    MULTI_LAYER_STORAGE = "MULTI_LAYER_STORAGE"

