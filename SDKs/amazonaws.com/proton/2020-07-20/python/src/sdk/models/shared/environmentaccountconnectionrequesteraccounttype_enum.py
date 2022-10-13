from dataclasses import dataclass, field
from typing import Enum

class EnvironmentAccountConnectionRequesterAccountTypeEnum(str, Enum):
    MANAGEMENT_ACCOUNT = "MANAGEMENT_ACCOUNT"
    ENVIRONMENT_ACCOUNT = "ENVIRONMENT_ACCOUNT"

