from dataclasses import dataclass, field
from enum import Enum

class MonitoringTypeEnum(str, Enum):
    DATA_QUALITY = "DataQuality"
    MODEL_QUALITY = "ModelQuality"
    MODEL_BIAS = "ModelBias"
    MODEL_EXPLAINABILITY = "ModelExplainability"

