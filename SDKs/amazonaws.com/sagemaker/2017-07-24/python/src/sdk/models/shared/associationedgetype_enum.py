from dataclasses import dataclass, field
from typing import Enum

class AssociationEdgeTypeEnum(str, Enum):
    CONTRIBUTED_TO = "ContributedTo"
    ASSOCIATED_WITH = "AssociatedWith"
    DERIVED_FROM = "DerivedFrom"
    PRODUCED = "Produced"

