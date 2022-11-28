from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Product:
    r"""Product
    The type that defines the fields for the aspects of a product.
    """
    
    aspects: Optional[List[Aspect]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspects') }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    epid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epid') }})
    image_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrls') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
