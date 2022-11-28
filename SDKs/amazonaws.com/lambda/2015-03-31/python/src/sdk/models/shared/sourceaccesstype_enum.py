from dataclasses import dataclass, field
from enum import Enum

class SourceAccessTypeEnum(str, Enum):
    BASIC_AUTH = "BASIC_AUTH"
    VPC_SUBNET = "VPC_SUBNET"
    VPC_SECURITY_GROUP = "VPC_SECURITY_GROUP"
    SASL_SCRAM_512_AUTH = "SASL_SCRAM_512_AUTH"
    SASL_SCRAM_256_AUTH = "SASL_SCRAM_256_AUTH"
    VIRTUAL_HOST = "VIRTUAL_HOST"

