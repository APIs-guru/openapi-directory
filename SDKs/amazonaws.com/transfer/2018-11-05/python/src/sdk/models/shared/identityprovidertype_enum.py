from dataclasses import dataclass, field
from typing import Enum

class IdentityProviderTypeEnum(str, Enum):
    SERVICE_MANAGED = "SERVICE_MANAGED"
    API_GATEWAY = "API_GATEWAY"
    AWS_DIRECTORY_SERVICE = "AWS_DIRECTORY_SERVICE"

