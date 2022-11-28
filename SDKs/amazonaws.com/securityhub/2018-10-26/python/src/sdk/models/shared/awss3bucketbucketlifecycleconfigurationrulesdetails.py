from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesDetails
    Configuration for a lifecycle rule.
    """
    
    abort_incomplete_multipart_upload: Optional[AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbortIncompleteMultipartUpload') }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationDate') }})
    expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpirationInDays') }})
    expired_object_delete_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpiredObjectDeleteMarker') }})
    filter: Optional[AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    noncurrent_version_expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncurrentVersionExpirationInDays') }})
    noncurrent_version_transitions: Optional[List[AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoncurrentVersionTransitions') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    transitions: Optional[List[AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Transitions') }})
    
