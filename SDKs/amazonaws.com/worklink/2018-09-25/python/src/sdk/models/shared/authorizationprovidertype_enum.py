from dataclasses import dataclass, field
from typing import Enum

class AuthorizationProviderTypeEnum(str, Enum):
    SAML = "SAML"

