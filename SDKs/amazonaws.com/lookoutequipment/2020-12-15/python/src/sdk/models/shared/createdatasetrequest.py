from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDatasetRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    dataset_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    dataset_schema: DatasetSchema = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetSchema') }})
    server_side_kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServerSideKmsKeyId') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
