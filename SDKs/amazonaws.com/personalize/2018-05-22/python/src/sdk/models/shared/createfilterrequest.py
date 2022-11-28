from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateFilterRequest:
    dataset_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetGroupArn') }})
    filter_expression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterExpression') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
