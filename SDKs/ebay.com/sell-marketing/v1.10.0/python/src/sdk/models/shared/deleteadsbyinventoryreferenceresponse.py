from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteAdsByInventoryReferenceResponse:
    r"""DeleteAdsByInventoryReferenceResponse
    This type defines the fields returned by request to delete a set of ads by inventory reference ID.
    """
    
    ad_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adIds') }})
    errors: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    inventory_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceId') }})
    inventory_reference_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryReferenceType') }})
    status_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    
