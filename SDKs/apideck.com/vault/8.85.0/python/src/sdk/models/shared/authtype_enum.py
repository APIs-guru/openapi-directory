from dataclasses import dataclass, field
from enum import Enum

class AuthTypeEnum(str, Enum):
    OAUTH2 = "oauth2"
    API_KEY = "apiKey"
    BASIC = "basic"
    CUSTOM = "custom"
    NONE = "none"

