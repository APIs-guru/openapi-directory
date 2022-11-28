from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDatasetImportJobRequest:
    data_source: DataSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSource') }})
    dataset_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetArn') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
