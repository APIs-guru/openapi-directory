from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails
from . import awss3bucketbucketlifecycleconfigurationrulesfilterdetails
from . import awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails
from . import awss3bucketbucketlifecycleconfigurationrulestransitionsdetails


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesDetails:
    abort_incomplete_multipart_upload: Optional[awss3bucketbucketlifecycleconfigurationrulesabortincompletemultipartuploaddetails.AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbortIncompleteMultipartUpload' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationDate' }})
    expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationInDays' }})
    expired_object_delete_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiredObjectDeleteMarker' }})
    filter: Optional[awss3bucketbucketlifecycleconfigurationrulesfilterdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    noncurrent_version_expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoncurrentVersionExpirationInDays' }})
    noncurrent_version_transitions: Optional[List[awss3bucketbucketlifecycleconfigurationrulesnoncurrentversiontransitionsdetails.AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoncurrentVersionTransitions' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    transitions: Optional[List[awss3bucketbucketlifecycleconfigurationrulestransitionsdetails.AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transitions' }})
    
