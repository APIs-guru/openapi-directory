from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IngestionInputConfiguration:
    r"""IngestionInputConfiguration
     Specifies configuration information for the input data for the data ingestion job, including input data S3 location. 
    """
    
    s3_input_configuration: IngestionS3InputConfiguration = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3InputConfiguration') }})
    
