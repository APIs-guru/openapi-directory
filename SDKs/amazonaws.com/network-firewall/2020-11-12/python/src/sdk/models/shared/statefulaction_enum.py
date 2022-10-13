from dataclasses import dataclass, field
from typing import Enum

class StatefulActionEnum(str, Enum):
    PASS = "PASS"
    DROP = "DROP"
    ALERT = "ALERT"

