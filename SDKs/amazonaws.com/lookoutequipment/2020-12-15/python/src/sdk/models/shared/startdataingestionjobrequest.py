from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import ingestioninputconfiguration


@dataclass_json
@dataclass
class StartDataIngestionJobRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    dataset_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    ingestion_input_configuration: ingestioninputconfiguration.IngestionInputConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngestionInputConfiguration' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    
