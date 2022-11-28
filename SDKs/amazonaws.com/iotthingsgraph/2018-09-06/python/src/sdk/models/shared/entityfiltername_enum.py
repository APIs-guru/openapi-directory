from dataclasses import dataclass, field
from enum import Enum

class EntityFilterNameEnum(str, Enum):
    NAME = "NAME"
    NAMESPACE = "NAMESPACE"
    SEMANTIC_TYPE_PATH = "SEMANTIC_TYPE_PATH"
    REFERENCED_ENTITY_ID = "REFERENCED_ENTITY_ID"

