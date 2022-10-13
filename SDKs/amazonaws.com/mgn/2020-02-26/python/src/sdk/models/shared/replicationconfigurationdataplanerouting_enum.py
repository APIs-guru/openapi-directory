from dataclasses import dataclass, field
from typing import Enum

class ReplicationConfigurationDataPlaneRoutingEnum(str, Enum):
    PRIVATE_IP = "PRIVATE_IP"
    PUBLIC_IP = "PUBLIC_IP"

