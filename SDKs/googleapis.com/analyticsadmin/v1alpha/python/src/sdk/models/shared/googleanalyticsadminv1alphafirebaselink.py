from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaFirebaseLinkInput:
    r"""GoogleAnalyticsAdminV1alphaFirebaseLinkInput
    A link between a GA4 property and a Firebase project.
    """
    
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaFirebaseLink:
    r"""GoogleAnalyticsAdminV1alphaFirebaseLink
    A link between a GA4 property and a Firebase project.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
