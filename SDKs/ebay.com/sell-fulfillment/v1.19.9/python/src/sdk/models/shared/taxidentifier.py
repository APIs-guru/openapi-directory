from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaxIdentifier:
    issuing_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuingCountry' }})
    tax_identifier_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxIdentifierType' }})
    taxpayer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxpayerId' }})
    
