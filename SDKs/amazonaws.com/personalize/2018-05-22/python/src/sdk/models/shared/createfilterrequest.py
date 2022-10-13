from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateFilterRequest:
    dataset_group_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroupArn' }})
    filter_expression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterExpression' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
