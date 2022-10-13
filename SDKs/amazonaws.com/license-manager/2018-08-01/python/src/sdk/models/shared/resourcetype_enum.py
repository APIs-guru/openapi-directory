from dataclasses import dataclass, field
from typing import Enum

class ResourceTypeEnum(str, Enum):
    EC2_INSTANCE = "EC2_INSTANCE"
    EC2_HOST = "EC2_HOST"
    EC2_AMI = "EC2_AMI"
    RDS = "RDS"
    SYSTEMS_MANAGER_MANAGED_INSTANCE = "SYSTEMS_MANAGER_MANAGED_INSTANCE"

