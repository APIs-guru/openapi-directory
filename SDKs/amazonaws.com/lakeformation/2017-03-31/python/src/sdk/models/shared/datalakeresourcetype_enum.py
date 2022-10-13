from dataclasses import dataclass, field
from typing import Enum

class DataLakeResourceTypeEnum(str, Enum):
    CATALOG = "CATALOG"
    DATABASE = "DATABASE"
    TABLE = "TABLE"
    DATA_LOCATION = "DATA_LOCATION"
    LF_TAG = "LF_TAG"
    LF_TAG_POLICY = "LF_TAG_POLICY"
    LF_TAG_POLICY_DATABASE = "LF_TAG_POLICY_DATABASE"
    LF_TAG_POLICY_TABLE = "LF_TAG_POLICY_TABLE"

