from dataclasses import dataclass, field
from enum import Enum

class StudioEncryptionConfigurationKeyTypeEnum(str, Enum):
    AWS_OWNED_KEY = "AWS_OWNED_KEY"
    CUSTOMER_MANAGED_KEY = "CUSTOMER_MANAGED_KEY"

