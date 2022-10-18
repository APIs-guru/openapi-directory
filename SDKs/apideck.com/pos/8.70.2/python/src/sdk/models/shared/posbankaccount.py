from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PosBankAccountAchDetails:
    account_number_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_number_suffix' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_type' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing_number' }})
    

@dataclass_json
@dataclass
class PosBankAccount:
    account_ownership_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ownership_type' }})
    ach_details: Optional[PosBankAccountAchDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ach_details' }})
    bank_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_name' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    statement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description' }})
    transfer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_type' }})
    
