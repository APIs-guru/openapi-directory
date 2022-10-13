from dataclasses import dataclass, field
from typing import Enum,List

class ListJobsFilterKeyEnum(str, Enum):
    JOB_TYPE = "jobType"
    JOB_STATUS = "jobStatus"
    CREATED_AT = "createdAt"
    NAME = "name"

