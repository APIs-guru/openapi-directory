from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaUserLinkInput:
    r"""GoogleAnalyticsAdminV1alphaUserLinkInput
    A resource message representing a user's permissions on an Account or Property resource.
    """
    
    direct_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directRoles') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaUserLink:
    r"""GoogleAnalyticsAdminV1alphaUserLink
    A resource message representing a user's permissions on an Account or Property resource.
    """
    
    direct_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directRoles') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
