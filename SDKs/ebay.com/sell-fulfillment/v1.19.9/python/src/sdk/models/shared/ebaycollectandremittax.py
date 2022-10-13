from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import ebaytaxreference


@dataclass_json
@dataclass
class EbayCollectAndRemitTax:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    collection_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionMethod' }})
    ebay_reference: Optional[ebaytaxreference.EbayTaxReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebayReference' }})
    tax_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxType' }})
    
