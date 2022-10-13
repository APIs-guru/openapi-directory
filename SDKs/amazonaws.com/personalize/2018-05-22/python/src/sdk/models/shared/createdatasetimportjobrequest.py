from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import datasource


@dataclass_json
@dataclass
class CreateDatasetImportJobRequest:
    data_source: datasource.DataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSource' }})
    dataset_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetArn' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
