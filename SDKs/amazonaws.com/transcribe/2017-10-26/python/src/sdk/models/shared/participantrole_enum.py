from dataclasses import dataclass, field
from enum import Enum

class ParticipantRoleEnum(str, Enum):
    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

