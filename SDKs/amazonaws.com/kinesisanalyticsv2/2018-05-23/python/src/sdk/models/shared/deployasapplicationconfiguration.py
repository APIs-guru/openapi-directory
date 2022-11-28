from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeployAsApplicationConfiguration:
    r"""DeployAsApplicationConfiguration
    The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state..
    """
    
    s3_content_location: S3ContentBaseLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocation') }})
    
