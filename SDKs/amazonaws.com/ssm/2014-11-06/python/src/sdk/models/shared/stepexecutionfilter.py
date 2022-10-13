from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import stepexecutionfilterkey_enum


@dataclass_json
@dataclass
class StepExecutionFilter:
    key: stepexecutionfilterkey_enum.StepExecutionFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    values: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
