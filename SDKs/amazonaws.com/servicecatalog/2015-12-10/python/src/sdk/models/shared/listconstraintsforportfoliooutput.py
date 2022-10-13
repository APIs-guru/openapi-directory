from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import constraintdetail


@dataclass_json
@dataclass
class ListConstraintsForPortfolioOutput:
    constraint_details: Optional[List[constraintdetail.ConstraintDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConstraintDetails' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageToken' }})
    
