from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductInformationFilter:
    product_information_filter_comparator: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationFilterComparator' }})
    product_information_filter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationFilterName' }})
    product_information_filter_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationFilterValue' }})
    
