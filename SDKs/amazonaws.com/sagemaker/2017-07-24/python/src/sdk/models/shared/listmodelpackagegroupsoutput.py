from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListModelPackageGroupsOutput:
    model_package_group_summary_list: List[ModelPackageGroupSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelPackageGroupSummaryList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
