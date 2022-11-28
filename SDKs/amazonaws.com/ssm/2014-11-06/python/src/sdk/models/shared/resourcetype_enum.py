from dataclasses import dataclass, field
from enum import Enum

class ResourceTypeEnum(str, Enum):
    MANAGED_INSTANCE = "ManagedInstance"
    DOCUMENT = "Document"
    EC2_INSTANCE = "EC2Instance"

