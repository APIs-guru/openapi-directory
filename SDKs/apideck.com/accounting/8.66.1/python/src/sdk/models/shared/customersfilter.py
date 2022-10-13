from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CustomersFilter:
    company_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company_name' }})
    display_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'display_name' }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_name' }})
    
