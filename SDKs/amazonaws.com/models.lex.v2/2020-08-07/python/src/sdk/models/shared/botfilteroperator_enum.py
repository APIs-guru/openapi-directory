from dataclasses import dataclass, field
from typing import Enum

class BotFilterOperatorEnum(str, Enum):
    CO = "CO"
    EQ = "EQ"

