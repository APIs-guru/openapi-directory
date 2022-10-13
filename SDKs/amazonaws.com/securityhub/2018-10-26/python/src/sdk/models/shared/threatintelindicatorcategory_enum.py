from dataclasses import dataclass, field
from typing import Enum

class ThreatIntelIndicatorCategoryEnum(str, Enum):
    BACKDOOR = "BACKDOOR"
    CARD_STEALER = "CARD_STEALER"
    COMMAND_AND_CONTROL = "COMMAND_AND_CONTROL"
    DROP_SITE = "DROP_SITE"
    EXPLOIT_SITE = "EXPLOIT_SITE"
    KEYLOGGER = "KEYLOGGER"

