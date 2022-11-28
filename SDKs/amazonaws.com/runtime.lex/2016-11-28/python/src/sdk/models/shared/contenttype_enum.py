from dataclasses import dataclass, field
from enum import Enum

class ContentTypeEnum(str, Enum):
    APPLICATION_VND_AMAZONAWS_CARD_GENERIC = "application/vnd.amazonaws.card.generic"

