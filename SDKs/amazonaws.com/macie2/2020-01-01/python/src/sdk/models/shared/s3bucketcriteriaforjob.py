from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import criteriablockforjob
from . import criteriablockforjob


@dataclass_json
@dataclass
class S3BucketCriteriaForJob:
    excludes: Optional[criteriablockforjob.CriteriaBlockForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    includes: Optional[criteriablockforjob.CriteriaBlockForJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includes' }})
    
