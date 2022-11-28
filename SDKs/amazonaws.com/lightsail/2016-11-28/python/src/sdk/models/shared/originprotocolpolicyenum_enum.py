from dataclasses import dataclass, field
from enum import Enum

class OriginProtocolPolicyEnumEnum(str, Enum):
    HTTP_ONLY = "http-only"
    HTTPS_ONLY = "https-only"

