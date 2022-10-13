from dataclasses import dataclass, field
from typing import Enum

class EditorialSegmentContractEnum(str, Enum):
    ARCHIVAL = "archival"
    ENTERTAINMENT = "entertainment"
    NEWS = "news"
    PUBLICITY = "publicity"
    ROYALTY = "royalty"
    SPORT = "sport"

