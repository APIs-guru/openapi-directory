from dataclasses import dataclass, field
from typing import Enum

class HyperParameterTuningJobStrategyTypeEnum(str, Enum):
    BAYESIAN = "Bayesian"
    RANDOM = "Random"

