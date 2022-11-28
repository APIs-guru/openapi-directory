from dataclasses import dataclass, field
from enum import Enum

class RootDeviceTypeEnum(str, Enum):
    EBS = "ebs"
    INSTANCE_STORE = "instance-store"

