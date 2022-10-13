from dataclasses import dataclass, field
from typing import Enum,List

class ListJobsSortAttributeNameEnum(str, Enum):
    CREATED_AT = "createdAt"
    JOB_STATUS = "jobStatus"
    NAME = "name"
    JOB_TYPE = "jobType"

