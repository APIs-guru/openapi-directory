from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import apptype_enum
from . import resourcespec
from . import tag


@dataclass_json
@dataclass
class CreateAppRequest:
    app_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    app_type: apptype_enum.AppTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppType' }})
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    resource_spec: Optional[resourcespec.ResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceSpec' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    user_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    
