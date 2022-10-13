from dataclasses import dataclass, field
from typing import Enum

class SortPipelineExecutionsByEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    PIPELINE_EXECUTION_ARN = "PipelineExecutionArn"

