from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acentrydto


@dataclass_json
@dataclass
class ProductTranDto:
    ac_entries: Optional[List[acentrydto.AcEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acEntries' }})
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    amount_net: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amountNet' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCode' }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    tran_notes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tranNotes' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPrice' }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vat' }})
    vat_analysis_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatAnalysisTypeId' }})
    vat_rate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatRateId' }})
    
