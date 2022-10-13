from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import detailedalgorithmstatus_enum


@dataclass_json
@dataclass
class AlgorithmStatusItem:
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: detailedalgorithmstatus_enum.DetailedAlgorithmStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
