from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelingjobs3datasource
from . import labelingjobsnsdatasource


@dataclass_json
@dataclass
class LabelingJobDataSource:
    s3_data_source: Optional[labelingjobs3datasource.LabelingJobS3DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataSource' }})
    sns_data_source: Optional[labelingjobsnsdatasource.LabelingJobSnsDataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnsDataSource' }})
    
