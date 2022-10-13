from dataclasses import dataclass, field
from typing import Enum

class IdentityTypeEnum(str, Enum):
    EMAIL_ADDRESS = "EMAIL_ADDRESS"
    DOMAIN = "DOMAIN"
    MANAGED_DOMAIN = "MANAGED_DOMAIN"

