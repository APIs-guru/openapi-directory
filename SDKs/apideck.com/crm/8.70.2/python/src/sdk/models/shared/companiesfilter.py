from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CompaniesFilter:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name' }})
    
