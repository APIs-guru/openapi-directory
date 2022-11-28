from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateFilesBulkRequest:
    r"""UpdateFilesBulkRequest
    Request model for updating files
    """
    
    object_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    classification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    expiration: Optional[ObjectExpiration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiration') }})
    
