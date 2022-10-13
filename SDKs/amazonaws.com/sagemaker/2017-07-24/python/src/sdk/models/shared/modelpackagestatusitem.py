from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import detailedmodelpackagestatus_enum


@dataclass_json
@dataclass
class ModelPackageStatusItem:
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    status: detailedmodelpackagestatus_enum.DetailedModelPackageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
