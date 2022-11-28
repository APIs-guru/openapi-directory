from dataclasses import dataclass, field
from enum import Enum

class EditorialSegmentContractEnum(str, Enum):
    ARCHIVAL = "archival"
    ENTERTAINMENT = "entertainment"
    NEWS = "news"
    PUBLICITY = "publicity"
    ROYALTY = "royalty"
    SPORT = "sport"

