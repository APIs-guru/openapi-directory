from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentsProgramResponse:
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    payments_program_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsProgramType' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    was_previously_opted_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wasPreviouslyOptedIn' }})
    
