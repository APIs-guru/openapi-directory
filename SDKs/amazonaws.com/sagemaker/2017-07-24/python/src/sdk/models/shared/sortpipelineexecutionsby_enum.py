from dataclasses import dataclass, field
from enum import Enum

class SortPipelineExecutionsByEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    PIPELINE_EXECUTION_ARN = "PipelineExecutionArn"

