from dataclasses import dataclass, field
from enum import Enum

class AccountJoinedMethodEnum(str, Enum):
    INVITED = "INVITED"
    CREATED = "CREATED"

