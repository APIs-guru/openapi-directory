from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationdetail


@dataclass_json
@dataclass
class RollbackApplicationResponse:
    application_detail: applicationdetail.ApplicationDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDetail' }})
    
