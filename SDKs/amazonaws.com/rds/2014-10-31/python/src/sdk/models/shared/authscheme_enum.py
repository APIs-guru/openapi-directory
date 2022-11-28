from dataclasses import dataclass, field
from enum import Enum

class AuthSchemeEnum(str, Enum):
    SECRETS = "SECRETS"

