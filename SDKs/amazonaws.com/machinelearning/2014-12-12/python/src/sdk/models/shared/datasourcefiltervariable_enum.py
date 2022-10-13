from dataclasses import dataclass, field
from typing import Enum

class DataSourceFilterVariableEnum(str, Enum):
    CREATED_AT = "CreatedAt"
    LAST_UPDATED_AT = "LastUpdatedAt"
    STATUS = "Status"
    NAME = "Name"
    DATA_LOCATION_S3 = "DataLocationS3"
    IAM_USER = "IAMUser"

