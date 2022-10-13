from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import searchresourcessimplecriterion
from . import searchresourcestagcriterion


@dataclass_json
@dataclass
class SearchResourcesCriteria:
    simple_criterion: Optional[searchresourcessimplecriterion.SearchResourcesSimpleCriterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleCriterion' }})
    tag_criterion: Optional[searchresourcestagcriterion.SearchResourcesTagCriterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagCriterion' }})
    
