from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetgroup


@dataclass_json
@dataclass
class DescribeDatasetGroupResponse:
    dataset_group: Optional[datasetgroup.DatasetGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetGroup' }})
    
