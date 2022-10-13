from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import reviewactiondetail
from . import reviewresultdetail


@dataclass_json
@dataclass
class ReviewReport:
    review_actions: Optional[List[reviewactiondetail.ReviewActionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewActions' }})
    review_results: Optional[List[reviewresultdetail.ReviewResultDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReviewResults' }})
    
