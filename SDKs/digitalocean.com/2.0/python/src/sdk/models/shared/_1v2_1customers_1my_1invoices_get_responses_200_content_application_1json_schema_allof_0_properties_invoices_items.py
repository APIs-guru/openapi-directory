from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21customers1my1invoicesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesInvoicesItems:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    invoice_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_period' }})
    invoice_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_uuid' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
