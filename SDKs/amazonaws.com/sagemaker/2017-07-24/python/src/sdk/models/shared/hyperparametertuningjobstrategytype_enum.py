from dataclasses import dataclass, field
from enum import Enum

class HyperParameterTuningJobStrategyTypeEnum(str, Enum):
    BAYESIAN = "Bayesian"
    RANDOM = "Random"

