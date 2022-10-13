from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import batchinferencejobconfig
from . import batchinferencejobinput
from . import batchinferencejoboutput


@dataclass_json
@dataclass
class BatchInferenceJob:
    batch_inference_job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchInferenceJobArn' }})
    batch_inference_job_config: Optional[batchinferencejobconfig.BatchInferenceJobConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchInferenceJobConfig' }})
    creation_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    filter_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterArn' }})
    job_input: Optional[batchinferencejobinput.BatchInferenceJobInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobInput' }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_output: Optional[batchinferencejoboutput.BatchInferenceJobOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobOutput' }})
    last_updated_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    num_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numResults' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    solution_version_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionVersionArn' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
