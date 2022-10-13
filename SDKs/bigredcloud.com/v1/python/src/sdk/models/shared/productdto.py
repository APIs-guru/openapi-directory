from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductDto:
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    gross_unit_price: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grossUnitPrice' }})
    has_default_vat_rate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasDefaultVatRate' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    stock_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stockCode' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPrice' }})
    vat_analysis_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatAnalysisTypeId' }})
    vat_rate_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatRateId' }})
    
