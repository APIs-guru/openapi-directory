from dataclasses import dataclass, field
from enum import Enum

class AuthorizationStatusEnum(str, Enum):
    AUTHORIZED = "Authorized"
    REVOKING = "Revoking"

