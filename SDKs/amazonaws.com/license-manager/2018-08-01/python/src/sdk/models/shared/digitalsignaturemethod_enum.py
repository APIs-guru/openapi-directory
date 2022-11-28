from dataclasses import dataclass, field
from enum import Enum

class DigitalSignatureMethodEnum(str, Enum):
    JWT_PS384 = "JWT_PS384"

