from dataclasses import dataclass, field
from enum import Enum

class StatefulActionEnum(str, Enum):
    PASS = "PASS"
    DROP = "DROP"
    ALERT = "ALERT"

