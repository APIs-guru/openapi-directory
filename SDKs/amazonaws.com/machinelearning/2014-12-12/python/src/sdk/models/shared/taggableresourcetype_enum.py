from dataclasses import dataclass, field
from typing import Enum

class TaggableResourceTypeEnum(str, Enum):
    BATCH_PREDICTION = "BatchPrediction"
    DATA_SOURCE = "DataSource"
    EVALUATION = "Evaluation"
    ML_MODEL = "MLModel"

