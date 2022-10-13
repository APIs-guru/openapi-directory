from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetingvaluesize
from . import targetingvaluesize


@dataclass_json
@dataclass
class TargetingValueCreativeSize:
    allowed_formats: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedFormats' }})
    companion_sizes: Optional[List[targetingvaluesize.TargetingValueSize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companionSizes' }})
    creative_size_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeSizeType' }})
    native_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativeTemplate' }})
    size: Optional[targetingvaluesize.TargetingValueSize] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    skippable_ad_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skippableAdType' }})
    
