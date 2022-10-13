from dataclasses import dataclass, field
from typing import Enum

class EndpointTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    VPC = "VPC"
    VPC_ENDPOINT = "VPC_ENDPOINT"

