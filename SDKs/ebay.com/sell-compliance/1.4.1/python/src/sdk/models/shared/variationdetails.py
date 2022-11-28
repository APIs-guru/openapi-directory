from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VariationDetails:
    r"""VariationDetails
    This type is used to identify the product variation that has the listing violation.
    """
    
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    variation_aspects: Optional[List[NameValueList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variationAspects') }})
    
