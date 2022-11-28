from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductInformation:
    r"""ProductInformation
    Describes product information for a license configuration.
    """
    
    product_information_filter_list: List[ProductInformationFilter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductInformationFilterList') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    
