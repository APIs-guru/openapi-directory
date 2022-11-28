from dataclasses import dataclass, field
from enum import Enum

class AppNetworkAccessTypeEnum(str, Enum):
    PUBLIC_INTERNET_ONLY = "PublicInternetOnly"
    VPC_ONLY = "VpcOnly"

