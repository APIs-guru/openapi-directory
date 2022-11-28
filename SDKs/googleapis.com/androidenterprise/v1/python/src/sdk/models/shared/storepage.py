from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StorePage:
    r"""StorePage
    Definition of a managed Google Play store page, made of a localized name and links to other pages. A page also contains clusters defined as a subcollection.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    link: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    name: Optional[List[LocalizedText]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
