from dataclasses import dataclass, field
from typing import Enum

class HandshakePartyTypeEnum(str, Enum):
    ACCOUNT = "ACCOUNT"
    ORGANIZATION = "ORGANIZATION"
    EMAIL = "EMAIL"

