from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelingJobDataSource:
    r"""LabelingJobDataSource
    <p>Provides information about the location of input data.</p> <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p> <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p> <p>Use <code>S3DataSource</code> to specify an input manifest file for both streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
    """
    
    s3_data_source: Optional[LabelingJobS3DataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3DataSource') }})
    sns_data_source: Optional[LabelingJobSnsDataSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnsDataSource') }})
    
