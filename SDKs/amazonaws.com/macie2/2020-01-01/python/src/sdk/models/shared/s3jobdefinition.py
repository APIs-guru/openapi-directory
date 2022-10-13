from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import s3bucketcriteriaforjob
from . import s3bucketdefinitionforjob
from . import scoping


@dataclass_json
@dataclass
class S3JobDefinition:
    bucket_criteria: Optional[s3bucketcriteriaforjob.S3BucketCriteriaForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketCriteria' }})
    bucket_definitions: Optional[List[s3bucketdefinitionforjob.S3BucketDefinitionForJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketDefinitions' }})
    scoping: Optional[scoping.Scoping] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoping' }})
    
