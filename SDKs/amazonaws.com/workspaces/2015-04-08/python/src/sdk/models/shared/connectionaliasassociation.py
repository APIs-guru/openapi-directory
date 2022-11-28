from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConnectionAliasAssociation:
    r"""ConnectionAliasAssociation
    Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    """
    
    associated_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatedAccountId') }})
    association_status: Optional[AssociationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationStatus') }})
    connection_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConnectionIdentifier') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    
