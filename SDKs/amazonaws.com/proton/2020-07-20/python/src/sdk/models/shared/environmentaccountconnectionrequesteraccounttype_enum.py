from dataclasses import dataclass, field
from enum import Enum

class EnvironmentAccountConnectionRequesterAccountTypeEnum(str, Enum):
    MANAGEMENT_ACCOUNT = "MANAGEMENT_ACCOUNT"
    ENVIRONMENT_ACCOUNT = "ENVIRONMENT_ACCOUNT"

