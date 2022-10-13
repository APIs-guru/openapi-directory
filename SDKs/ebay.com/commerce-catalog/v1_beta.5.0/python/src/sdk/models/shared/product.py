from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import image
from . import aspect
from . import image


@dataclass_json
@dataclass
class Product:
    additional_images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImages' }})
    aspects: Optional[List[aspect.Aspect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspects' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    ean: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ean' }})
    epid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epid' }})
    gtin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    isbn: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isbn' }})
    mpn: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    other_applicable_category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherApplicableCategoryIds' }})
    primary_category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryCategoryId' }})
    product_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productWebUrl' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    upc: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upc' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
