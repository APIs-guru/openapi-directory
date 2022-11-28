from dataclasses import dataclass, field
from enum import Enum

class AuthorizationProviderTypeEnum(str, Enum):
    SAML = "SAML"

