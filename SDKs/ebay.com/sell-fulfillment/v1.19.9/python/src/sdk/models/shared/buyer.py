from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import taxaddress
from . import taxidentifier


@dataclass_json
@dataclass
class Buyer:
    tax_address: Optional[taxaddress.TaxAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAddress' }})
    tax_identifier: Optional[taxidentifier.TaxIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxIdentifier' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
