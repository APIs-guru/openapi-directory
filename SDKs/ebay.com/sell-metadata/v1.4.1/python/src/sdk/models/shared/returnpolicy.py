from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnpolicydetails
from . import returnpolicydetails


@dataclass_json
@dataclass
class ReturnPolicy:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    category_tree_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTreeId' }})
    domestic: Optional[returnpolicydetails.ReturnPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domestic' }})
    international: Optional[returnpolicydetails.ReturnPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    
