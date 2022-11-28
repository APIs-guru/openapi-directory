from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ServiceUpdateRequest:
    r"""ServiceUpdateRequest
    A request to apply a service update
    """
    
    service_update_name_to_apply: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceUpdateNameToApply') }})
    
