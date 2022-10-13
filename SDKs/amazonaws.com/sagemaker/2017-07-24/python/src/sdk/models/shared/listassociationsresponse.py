from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationsummary


@dataclass_json
@dataclass
class ListAssociationsResponse:
    association_summaries: Optional[List[associationsummary.AssociationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
