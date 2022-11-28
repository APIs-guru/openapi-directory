from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeployAsApplicationConfigurationDescription:
    r"""DeployAsApplicationConfigurationDescription
    The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
    """
    
    s3_content_location_description: S3ContentBaseLocationDescription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3ContentLocationDescription') }})
    
