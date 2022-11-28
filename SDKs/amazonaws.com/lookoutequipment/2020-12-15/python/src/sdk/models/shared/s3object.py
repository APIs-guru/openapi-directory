from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3Object:
    r"""S3Object
    Contains information about an S3 bucket. 
    """
    
    bucket: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
