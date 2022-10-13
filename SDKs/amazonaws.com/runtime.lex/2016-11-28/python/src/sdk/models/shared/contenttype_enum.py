from dataclasses import dataclass, field
from typing import Enum

class ContentTypeEnum(str, Enum):
    APPLICATION_VND_AMAZONAWS_CARD_GENERIC = "application/vnd.amazonaws.card.generic"

