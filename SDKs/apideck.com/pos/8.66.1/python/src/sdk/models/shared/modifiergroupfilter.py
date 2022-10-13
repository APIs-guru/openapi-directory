from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ModifierGroupFilter:
    modifier_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modifier_group_id' }})
    
