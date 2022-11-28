from dataclasses import dataclass, field
from enum import Enum

class TaggableResourceTypeEnum(str, Enum):
    BATCH_PREDICTION = "BatchPrediction"
    DATA_SOURCE = "DataSource"
    EVALUATION = "Evaluation"
    ML_MODEL = "MLModel"

