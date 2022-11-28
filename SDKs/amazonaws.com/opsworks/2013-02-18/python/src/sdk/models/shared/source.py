from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Source:
    r"""Source
    Contains the information required to retrieve an app or cookbook from a repository. For more information, see <a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html\">Creating Apps</a> or <a href=\"https://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook.html\">Custom Recipes and Cookbooks</a>.
    """
    
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Password') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Revision') }})
    ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKey') }})
    type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Username') }})
    
