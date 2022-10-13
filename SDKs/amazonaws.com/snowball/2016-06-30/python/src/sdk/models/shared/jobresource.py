from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ec2amiresource
from . import lambdaresource
from . import s3resource


@dataclass_json
@dataclass
class JobResource:
    ec2_ami_resources: Optional[List[ec2amiresource.Ec2AmiResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ec2AmiResources' }})
    lambda_resources: Optional[List[lambdaresource.LambdaResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaResources' }})
    s3_resources: Optional[List[s3resource.S3Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Resources' }})
    
