from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails
    A value to use for the filter.
    """
    
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    tag: Optional[AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
