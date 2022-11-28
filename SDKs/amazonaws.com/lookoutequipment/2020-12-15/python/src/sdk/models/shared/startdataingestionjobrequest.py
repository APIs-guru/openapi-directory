from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartDataIngestionJobRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    dataset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    ingestion_input_configuration: IngestionInputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionInputConfiguration') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
