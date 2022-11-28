from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssociateS3ResourcesResult:
    failed_s3_resources: Optional[List[FailedS3Resource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failedS3Resources') }})
    
