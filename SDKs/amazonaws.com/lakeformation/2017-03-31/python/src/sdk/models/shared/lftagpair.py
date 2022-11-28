from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LfTagPair:
    r"""LfTagPair
    A structure containing a tag key-value pair.
    """
    
    tag_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValues') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    
