from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Item:
    r"""Item
    Represents item metadata added to an Items dataset using the <code>PutItems</code> API. For more information see <a href=\"https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html\">Importing Items Incrementally</a>. 
    """
    
    item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
