from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import studiolifecycleconfigapptype_enum
from . import tag


@dataclass_json
@dataclass
class CreateStudioLifecycleConfigRequest:
    studio_lifecycle_config_app_type: studiolifecycleconfigapptype_enum.StudioLifecycleConfigAppTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigAppType' }})
    studio_lifecycle_config_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigContent' }})
    studio_lifecycle_config_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StudioLifecycleConfigName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
