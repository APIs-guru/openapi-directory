from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobResource:
    r"""JobResource
    Contains an array of AWS resource objects. Each object represents an Amazon S3 bucket, an AWS Lambda function, or an Amazon Machine Image (AMI) based on Amazon EC2 that is associated with a particular job.
    """
    
    ec2_ami_resources: Optional[List[Ec2AmiResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2AmiResources') }})
    lambda_resources: Optional[List[LambdaResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaResources') }})
    s3_resources: Optional[List[S3Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Resources') }})
    
