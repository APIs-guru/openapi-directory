from dataclasses import dataclass, field
from typing import Enum

class StatefulRuleDirectionEnum(str, Enum):
    FORWARD = "FORWARD"
    ANY = "ANY"

