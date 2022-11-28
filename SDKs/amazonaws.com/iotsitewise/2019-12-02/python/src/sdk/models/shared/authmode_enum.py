from dataclasses import dataclass, field
from enum import Enum

class AuthModeEnum(str, Enum):
    IAM = "IAM"
    SSO = "SSO"

