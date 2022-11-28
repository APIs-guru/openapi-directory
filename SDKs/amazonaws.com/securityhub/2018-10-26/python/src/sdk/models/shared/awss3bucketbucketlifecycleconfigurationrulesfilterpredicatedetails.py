from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails
    The configuration for the filter.
    """
    
    operands: Optional[List[AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operands') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    tag: Optional[AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tag') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
