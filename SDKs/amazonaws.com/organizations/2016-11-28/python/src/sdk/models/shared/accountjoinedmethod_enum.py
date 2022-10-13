from dataclasses import dataclass, field
from typing import Enum

class AccountJoinedMethodEnum(str, Enum):
    INVITED = "INVITED"
    CREATED = "CREATED"

