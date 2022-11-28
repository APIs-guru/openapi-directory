from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class MlModelFilterVariableEnum(str, Enum):
    CREATED_AT = "CreatedAt"
    LAST_UPDATED_AT = "LastUpdatedAt"
    STATUS = "Status"
    NAME = "Name"
    IAM_USER = "IAMUser"
    TRAINING_DATA_SOURCE_ID = "TrainingDataSourceId"
    REALTIME_ENDPOINT_STATUS = "RealtimeEndpointStatus"
    ML_MODEL_TYPE = "MLModelType"
    ALGORITHM = "Algorithm"
    TRAINING_DATA_URI = "TrainingDataURI"

