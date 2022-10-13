from dataclasses import dataclass, field
from typing import Enum

class FirewallStatusValueEnum(str, Enum):
    PROVISIONING = "PROVISIONING"
    DELETING = "DELETING"
    READY = "READY"

