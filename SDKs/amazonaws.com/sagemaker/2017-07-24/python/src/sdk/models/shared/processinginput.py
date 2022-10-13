from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetdefinition
from . import processings3input


@dataclass_json
@dataclass
class ProcessingInput:
    app_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppManaged' }})
    dataset_definition: Optional[datasetdefinition.DatasetDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetDefinition' }})
    input_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputName' }})
    s3_input: Optional[processings3input.ProcessingS3Input] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Input' }})
    
