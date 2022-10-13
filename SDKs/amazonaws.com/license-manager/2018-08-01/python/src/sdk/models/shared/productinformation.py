from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import productinformationfilter


@dataclass_json
@dataclass
class ProductInformation:
    product_information_filter_list: List[productinformationfilter.ProductInformationFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductInformationFilterList' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
