from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3DestinationConfiguration:
    r"""S3DestinationConfiguration
    A complex type that describes an S3 location where recorded videos will be stored.
    """
    
    bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    
