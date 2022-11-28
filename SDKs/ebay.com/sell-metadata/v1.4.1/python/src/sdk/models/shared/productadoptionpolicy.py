from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductAdoptionPolicy:
    r"""ProductAdoptionPolicy
    This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
    """
    
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTreeId') }})
    exclusion: Optional[Exclusion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusion') }})
    product_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productRequired') }})
    
