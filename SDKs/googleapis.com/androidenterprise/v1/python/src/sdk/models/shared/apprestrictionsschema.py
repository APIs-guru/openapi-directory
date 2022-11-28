from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppRestrictionsSchema:
    r"""AppRestrictionsSchema
    Represents the list of app restrictions available to be pre-configured for the product.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    restrictions: Optional[List[AppRestrictionsSchemaRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    
