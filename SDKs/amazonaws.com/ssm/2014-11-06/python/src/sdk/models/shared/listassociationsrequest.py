from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import associationfilter


@dataclass_json
@dataclass
class ListAssociationsRequest:
    association_filter_list: Optional[List[associationfilter.AssociationFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationFilterList' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
