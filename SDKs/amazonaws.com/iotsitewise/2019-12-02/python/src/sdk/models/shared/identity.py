from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Identity:
    r"""Identity
    <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href=\"https://console.aws.amazon.com/singlesignon\">Amazon Web Services SSO console</a>.</p> </note>
    """
    
    group: Optional[GroupIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    iam_role: Optional[IamRoleIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamRole') }})
    iam_user: Optional[IamUserIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iamUser') }})
    user: Optional[UserIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
