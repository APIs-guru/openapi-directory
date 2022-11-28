from dataclasses import dataclass, field
from enum import Enum

class ProvisioningEnum(str, Enum):
    CUSTOMER_MANAGED = "CUSTOMER_MANAGED"

