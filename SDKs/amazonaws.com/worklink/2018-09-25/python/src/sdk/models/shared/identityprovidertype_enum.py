from dataclasses import dataclass, field
from typing import Enum

class IdentityProviderTypeEnum(str, Enum):
    SAML = "SAML"

