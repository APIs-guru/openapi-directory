from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import inferenceexecutionmode_enum


@dataclass_json
@dataclass
class InferenceExecutionConfig:
    mode: inferenceexecutionmode_enum.InferenceExecutionModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
