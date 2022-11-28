from dataclasses import dataclass, field
from enum import Enum

class OpsItemRelatedItemsFilterKeyEnum(str, Enum):
    RESOURCE_TYPE = "ResourceType"
    ASSOCIATION_ID = "AssociationId"
    RESOURCE_URI = "ResourceUri"

