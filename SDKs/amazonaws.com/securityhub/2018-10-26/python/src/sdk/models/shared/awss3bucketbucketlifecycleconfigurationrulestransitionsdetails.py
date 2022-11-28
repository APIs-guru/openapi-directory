from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails
    A rule for when objects transition to specific storage classes.
    """
    
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Date') }})
    days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Days') }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StorageClass') }})
    
