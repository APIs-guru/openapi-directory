from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModelReference:
    dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetId' }})
    model_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    
