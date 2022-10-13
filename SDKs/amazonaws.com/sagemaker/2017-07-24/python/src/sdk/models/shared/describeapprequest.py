from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import apptype_enum


@dataclass_json
@dataclass
class DescribeAppRequest:
    app_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppName' }})
    app_type: apptype_enum.AppTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppType' }})
    domain_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainId' }})
    user_profile_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserProfileName' }})
    
