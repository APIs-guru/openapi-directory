from dataclasses import dataclass, field
from typing import Enum

class EvaluationFilterVariableEnum(str, Enum):
    CREATED_AT = "CreatedAt"
    LAST_UPDATED_AT = "LastUpdatedAt"
    STATUS = "Status"
    NAME = "Name"
    IAM_USER = "IAMUser"
    ML_MODEL_ID = "MLModelId"
    DATA_SOURCE_ID = "DataSourceId"
    DATA_URI = "DataURI"

