from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3ReferenceDataSourceDescription:
    r"""S3ReferenceDataSourceDescription
    Provides the bucket name and object key name that stores the reference data.
    """
    
    bucket_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BucketARN') }})
    file_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileKey') }})
    reference_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceRoleARN') }})
    
