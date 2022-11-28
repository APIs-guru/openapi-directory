from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OfferTag:
    r"""OfferTag
    Represents a custom tag specified for base plans and subscription offers.
    """
    
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
