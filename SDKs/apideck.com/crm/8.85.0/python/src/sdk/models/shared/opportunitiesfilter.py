from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OpportunitiesFilter:
    company_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company_id' }})
    monetary_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'monetary_amount' }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    title: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'title' }})
    win_probability: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'win_probability' }})
    
