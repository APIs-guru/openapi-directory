from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDatasetRequest:
    dataset_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    dataset_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetType') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schema_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaArn') }})
    
