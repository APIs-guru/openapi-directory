from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DatastoreConfig:
    r"""GoogleCloudApigeeV1DatastoreConfig
    Configuration detail for datastore
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetName') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    table_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tablePrefix') }})
    
