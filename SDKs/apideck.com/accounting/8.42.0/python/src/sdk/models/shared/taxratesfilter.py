from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TaxRatesFilter:
    assets: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'assets' }})
    equity: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'equity' }})
    expenses: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expenses' }})
    liabilities: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'liabilities' }})
    revenue: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'revenue' }})
    
