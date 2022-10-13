from dataclasses import dataclass, field
from typing import Enum

class SearchResourcesSortAttributeNameEnum(str, Enum):
    ACCOUNT_ID = "ACCOUNT_ID"
    RESOURCE_NAME = "RESOURCE_NAME"
    S3_CLASSIFIABLE_OBJECT_COUNT = "S3_CLASSIFIABLE_OBJECT_COUNT"
    S3_CLASSIFIABLE_SIZE_IN_BYTES = "S3_CLASSIFIABLE_SIZE_IN_BYTES"

