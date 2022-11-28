from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationDetail:
    r"""AwsS3BucketNotificationConfigurationDetail
    Details for an S3 bucket notification configuration.
    """
    
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    filter: Optional[AwsS3BucketNotificationConfigurationFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
