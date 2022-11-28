from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails
    A tag that is assigned to matching objects.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
