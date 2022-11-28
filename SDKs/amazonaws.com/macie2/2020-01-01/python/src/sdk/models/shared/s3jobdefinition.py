from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3JobDefinition:
    r"""S3JobDefinition
    Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis. The bucket specification can be static (bucketDefinitions) or dynamic (bucketCriteria). If it's static, the job analyzes objects in the same predefined set of buckets each time the job runs. If it's dynamic, the job analyzes objects in any buckets that match the specified criteria each time the job starts to run.
    """
    
    bucket_criteria: Optional[S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketCriteria') }})
    bucket_definitions: Optional[List[S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketDefinitions') }})
    scoping: Optional[Scoping] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoping') }})
    
