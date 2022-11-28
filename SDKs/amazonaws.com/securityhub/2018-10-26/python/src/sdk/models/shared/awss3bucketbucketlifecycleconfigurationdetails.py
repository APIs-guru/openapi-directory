from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationDetails
    The lifecycle configuration for the objects in the S3 bucket.
    """
    
    rules: Optional[List[AwsS3BucketBucketLifecycleConfigurationRulesDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
