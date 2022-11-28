from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductInformationFilter:
    r"""ProductInformationFilter
    Describes product information filters.
    """
    
    product_information_filter_comparator: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterComparator') }})
    product_information_filter_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterName') }})
    product_information_filter_value: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterValue') }})
    
