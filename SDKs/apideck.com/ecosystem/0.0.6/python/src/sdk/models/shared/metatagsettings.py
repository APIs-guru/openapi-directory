from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetaTagSettings:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_category_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_category_page') }})
    description_collection_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_collection_page') }})
    description_listing_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_listing_page') }})
    keywords: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    title_postfix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title_postfix') }})
    
