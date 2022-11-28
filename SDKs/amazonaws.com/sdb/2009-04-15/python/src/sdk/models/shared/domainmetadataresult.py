from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DomainMetadataResult:
    attribute_name_count: Optional[int] = field(default=None)
    attribute_names_size_bytes: Optional[int] = field(default=None)
    attribute_value_count: Optional[int] = field(default=None)
    attribute_values_size_bytes: Optional[int] = field(default=None)
    item_count: Optional[int] = field(default=None)
    item_names_size_bytes: Optional[int] = field(default=None)
    timestamp: Optional[int] = field(default=None)
    
