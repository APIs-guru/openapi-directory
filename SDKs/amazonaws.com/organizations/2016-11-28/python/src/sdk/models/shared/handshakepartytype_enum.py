from dataclasses import dataclass, field
from enum import Enum

class HandshakePartyTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"
    EMAIL = "EMAIL"

