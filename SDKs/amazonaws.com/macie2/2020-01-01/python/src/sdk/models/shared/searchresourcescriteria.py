from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResourcesCriteria:
    r"""SearchResourcesCriteria
    Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
    """
    
    simple_criterion: Optional[SearchResourcesSimpleCriterion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleCriterion') }})
    tag_criterion: Optional[SearchResourcesTagCriterion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagCriterion') }})
    
