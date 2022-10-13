from dataclasses import dataclass, field
from typing import Enum

class AuthModeEnum(str, Enum):
    IAM = "IAM"
    SSO = "SSO"

