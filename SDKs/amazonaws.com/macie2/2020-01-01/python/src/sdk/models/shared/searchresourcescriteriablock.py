from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchResourcesCriteriaBlock:
    r"""SearchResourcesCriteriaBlock
    Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.
    """
    
    and_: Optional[List[SearchResourcesCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('and') }})
    
