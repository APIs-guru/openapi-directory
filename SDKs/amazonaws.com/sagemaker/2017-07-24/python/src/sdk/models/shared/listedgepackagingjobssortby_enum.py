from dataclasses import dataclass, field
from enum import Enum

class ListEdgePackagingJobsSortByEnum(str, Enum):
    NAME = "NAME"
    MODEL_NAME = "MODEL_NAME"
    CREATION_TIME = "CREATION_TIME"
    LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"
    STATUS = "STATUS"

