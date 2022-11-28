from dataclasses import dataclass, field
from enum import Enum

class StudioComponentSubtypeEnum(str, Enum):
    AWS_MANAGED_MICROSOFT_AD = "AWS_MANAGED_MICROSOFT_AD"
    AMAZON_FSX_FOR_WINDOWS = "AMAZON_FSX_FOR_WINDOWS"
    AMAZON_FSX_FOR_LUSTRE = "AMAZON_FSX_FOR_LUSTRE"
    CUSTOM = "CUSTOM"

