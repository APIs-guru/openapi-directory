from dataclasses import dataclass, field
from typing import Enum

class OAuthGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"

