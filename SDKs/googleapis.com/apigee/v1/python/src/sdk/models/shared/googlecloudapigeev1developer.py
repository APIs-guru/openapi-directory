from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Developer:
    access_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    app_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appFamily') }})
    apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    companies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    developer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_modified_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedAt') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    organization_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationName') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperInput:
    access_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessType') }})
    app_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appFamily') }})
    apps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apps') }})
    attributes: Optional[List[GoogleCloudApigeeV1Attribute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    companies: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companies') }})
    developer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerId') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
