from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDatasetRequest:
    dataset_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    dataset_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetType' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaArn' }})
    
