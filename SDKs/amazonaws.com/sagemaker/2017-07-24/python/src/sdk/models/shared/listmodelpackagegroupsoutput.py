from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import modelpackagegroupsummary


@dataclass_json
@dataclass
class ListModelPackageGroupsOutput:
    model_package_group_summary_list: List[modelpackagegroupsummary.ModelPackageGroupSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
