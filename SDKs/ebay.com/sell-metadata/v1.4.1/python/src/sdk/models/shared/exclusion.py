from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Exclusion:
    r"""Exclusion
    This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
    """
    
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brands') }})
    
