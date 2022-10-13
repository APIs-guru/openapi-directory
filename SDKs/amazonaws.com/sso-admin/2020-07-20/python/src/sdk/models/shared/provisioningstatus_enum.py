from dataclasses import dataclass, field
from typing import Enum

class ProvisioningStatusEnum(str, Enum):
    LATEST_PERMISSION_SET_PROVISIONED = "LATEST_PERMISSION_SET_PROVISIONED"
    LATEST_PERMISSION_SET_NOT_PROVISIONED = "LATEST_PERMISSION_SET_NOT_PROVISIONED"

