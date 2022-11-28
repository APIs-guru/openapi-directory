from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdReference:
    r"""AdReference
    This type defines the fields for an ad ID and its associated URL.
    """
    
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adId') }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    
