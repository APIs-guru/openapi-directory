from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datasetstatus_enum


@dataclass_json
@dataclass
class CreateDatasetResponse:
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    status: Optional[datasetstatus_enum.DatasetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
