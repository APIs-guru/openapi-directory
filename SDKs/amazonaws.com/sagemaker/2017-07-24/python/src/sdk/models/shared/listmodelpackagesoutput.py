from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import modelpackagesummary


@dataclass_json
@dataclass
class ListModelPackagesOutput:
    model_package_summary_list: List[modelpackagesummary.ModelPackageSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
