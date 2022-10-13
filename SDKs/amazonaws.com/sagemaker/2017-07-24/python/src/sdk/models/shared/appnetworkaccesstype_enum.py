from dataclasses import dataclass, field
from typing import Enum

class AppNetworkAccessTypeEnum(str, Enum):
    PUBLIC_INTERNET_ONLY = "PublicInternetOnly"
    VPC_ONLY = "VpcOnly"

