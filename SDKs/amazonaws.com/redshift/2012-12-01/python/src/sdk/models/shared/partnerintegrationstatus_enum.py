from dataclasses import dataclass, field
from enum import Enum

class PartnerIntegrationStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    RUNTIME_FAILURE = "RuntimeFailure"
    CONNECTION_FAILURE = "ConnectionFailure"

