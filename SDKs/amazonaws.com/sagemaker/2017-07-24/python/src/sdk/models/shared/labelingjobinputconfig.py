from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelingjobdataattributes
from . import labelingjobdatasource


@dataclass_json
@dataclass
class LabelingJobInputConfig:
    data_attributes: Optional[labelingjobdataattributes.LabelingJobDataAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataAttributes' }})
    data_source: labelingjobdatasource.LabelingJobDataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    
