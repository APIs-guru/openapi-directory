from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountTreeRequest:
    r"""AccountTreeRequest
    JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
    """
    
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileName') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    webproperty_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webpropertyName') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('websiteUrl') }})
    
