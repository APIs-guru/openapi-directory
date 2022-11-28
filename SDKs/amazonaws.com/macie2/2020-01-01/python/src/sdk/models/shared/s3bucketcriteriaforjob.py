from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3BucketCriteriaForJob:
    r"""S3BucketCriteriaForJob
    Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
    """
    
    excludes: Optional[CriteriaBlockForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    includes: Optional[CriteriaBlockForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includes') }})
    
