from dataclasses import dataclass, field
from enum import Enum

class EndpointTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    VPC = "VPC"
    VPC_ENDPOINT = "VPC_ENDPOINT"

