from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import searchresourcescomparator_enum
from . import searchresourcestagcriterionpair


@dataclass_json
@dataclass
class SearchResourcesTagCriterion:
    comparator: Optional[searchresourcescomparator_enum.SearchResourcesComparatorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comparator' }})
    tag_values: Optional[List[searchresourcestagcriterionpair.SearchResourcesTagCriterionPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagValues' }})
    
