from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CarListingRank:
    r"""CarListingRank
    Ranking query response
    """
    
    ranked_listing: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranked_listing') }})
    
