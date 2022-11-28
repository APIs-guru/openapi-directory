from dataclasses import dataclass, field
from enum import Enum

class IdentityProviderTypeEnum(str, Enum):
    SERVICE_MANAGED = "SERVICE_MANAGED"
    API_GATEWAY = "API_GATEWAY"
    AWS_DIRECTORY_SERVICE = "AWS_DIRECTORY_SERVICE"

