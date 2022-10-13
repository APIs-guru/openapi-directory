from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetschema
from . import tag


@dataclass_json
@dataclass
class CreateDatasetRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    dataset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    dataset_schema: datasetschema.DatasetSchema = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetSchema' }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerSideKmsKeyId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
