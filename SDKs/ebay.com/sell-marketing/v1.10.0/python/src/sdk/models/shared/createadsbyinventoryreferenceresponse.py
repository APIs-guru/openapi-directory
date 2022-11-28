from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateAdsByInventoryReferenceResponse:
    r"""CreateAdsByInventoryReferenceResponse
    This type defines the fields returned when you create an ad by inventory reference ID.
    """
    
    ads: Optional[List[AdReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ads') }})
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceType') }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
