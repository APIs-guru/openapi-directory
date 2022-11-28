from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingValueCreativeSize:
    r"""TargetingValueCreativeSize
    Next Id: 7
    """
    
    allowed_formats: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedFormats') }})
    companion_sizes: Optional[List[TargetingValueSize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companionSizes') }})
    creative_size_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSizeType') }})
    native_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativeTemplate') }})
    size: Optional[TargetingValueSize] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    skippable_ad_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippableAdType') }})
    
