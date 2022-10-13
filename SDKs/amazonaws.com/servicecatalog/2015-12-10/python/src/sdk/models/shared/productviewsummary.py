from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import producttype_enum


@dataclass_json
@dataclass
class ProductViewSummary:
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Distributor' }})
    has_default_path: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HasDefaultPath' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Owner' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShortDescription' }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportDescription' }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportEmail' }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportUrl' }})
    type: Optional[producttype_enum.ProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
