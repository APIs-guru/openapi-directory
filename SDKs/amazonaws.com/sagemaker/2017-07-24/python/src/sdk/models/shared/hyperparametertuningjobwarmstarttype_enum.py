from dataclasses import dataclass, field
from enum import Enum

class HyperParameterTuningJobWarmStartTypeEnum(str, Enum):
    IDENTICAL_DATA_AND_ALGORITHM = "IdenticalDataAndAlgorithm"
    TRANSFER_LEARNING = "TransferLearning"

