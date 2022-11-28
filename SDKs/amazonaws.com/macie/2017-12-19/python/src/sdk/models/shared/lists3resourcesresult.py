from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListS3ResourcesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    s3_resources: Optional[List[S3ResourceClassification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Resources') }})
    
