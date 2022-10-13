from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import candidatesteptype_enum


@dataclass_json
@dataclass
class AutoMlCandidateStep:
    candidate_step_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateStepArn' }})
    candidate_step_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateStepName' }})
    candidate_step_type: candidatesteptype_enum.CandidateStepTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CandidateStepType' }})
    
