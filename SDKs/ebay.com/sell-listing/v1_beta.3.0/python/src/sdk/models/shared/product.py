from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aspect


@dataclass_json
@dataclass
class Product:
    aspects: Optional[List[aspect.Aspect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspects' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    epid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epid' }})
    image_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUrls' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
