from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import exclusion


@dataclass_json
@dataclass
class ProductAdoptionPolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTreeId' }})
    exclusion: Optional[exclusion.Exclusion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusion' }})
    product_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productRequired' }})
    
