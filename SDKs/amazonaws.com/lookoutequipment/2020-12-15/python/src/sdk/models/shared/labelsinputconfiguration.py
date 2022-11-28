from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LabelsInputConfiguration:
    r"""LabelsInputConfiguration
    Contains the configuration information for the S3 location being used to hold label data. 
    """
    
    s3_input_configuration: LabelsS3InputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
