from dataclasses import dataclass, field
from typing import Enum

class OpsItemRelatedItemsFilterKeyEnum(str, Enum):
    RESOURCE_TYPE = "ResourceType"
    ASSOCIATION_ID = "AssociationId"
    RESOURCE_URI = "ResourceUri"

