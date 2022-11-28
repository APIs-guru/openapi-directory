from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionAlias:
    r"""ConnectionAlias
    Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    """
    
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    associations: Optional[List[ConnectionAliasAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Associations') }})
    connection_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionString') }})
    owner_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerAccountId') }})
    state: Optional[ConnectionAliasStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
