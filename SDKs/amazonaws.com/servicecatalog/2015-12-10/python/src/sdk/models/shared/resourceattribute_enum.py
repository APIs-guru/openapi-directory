from dataclasses import dataclass, field
from typing import Enum

class ResourceAttributeEnum(str, Enum):
    PROPERTIES = "PROPERTIES"
    METADATA = "METADATA"
    CREATIONPOLICY = "CREATIONPOLICY"
    UPDATEPOLICY = "UPDATEPOLICY"
    DELETIONPOLICY = "DELETIONPOLICY"
    TAGS = "TAGS"

