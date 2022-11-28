from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductSummary:
    r"""ProductSummary
    This type contains a summary of a specified product. The product summary includes information about the product's identifiers, product images, aspects, and the getProduct URL for retrieving the product details.
    """
    
    additional_images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalImages') }})
    aspects: Optional[List[Aspect]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspects') }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    ean: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ean') }})
    epid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('epid') }})
    gtin: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gtin') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    isbn: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isbn') }})
    mpn: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mpn') }})
    product_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productHref') }})
    product_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productWebUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    upc: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upc') }})
    
