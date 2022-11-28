from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class S3BucketDefinitionForJob:
    r"""S3BucketDefinitionForJob
    Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
    """
    
    account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    buckets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buckets') }})
    
