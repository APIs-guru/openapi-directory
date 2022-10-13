from dataclasses import dataclass, field
from typing import Enum

class AuthModeEnum(str, Enum):
    SSO = "SSO"
    IAM = "IAM"

