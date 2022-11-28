from dataclasses import dataclass, field
from enum import Enum

class StatefulRuleDirectionEnum(str, Enum):
    FORWARD = "FORWARD"
    ANY = "ANY"

