from dataclasses import dataclass, field
from typing import Enum

class ProvisioningEnum(str, Enum):
    CUSTOMER_MANAGED = "CUSTOMER_MANAGED"

