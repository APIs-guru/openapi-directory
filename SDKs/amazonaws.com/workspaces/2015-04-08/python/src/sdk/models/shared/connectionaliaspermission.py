from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectionAliasPermission:
    r"""ConnectionAliasPermission
    Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href=\"https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html\"> Cross-Region Redirection for Amazon WorkSpaces</a>.
    """
    
    allow_association: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowAssociation') }})
    shared_account_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedAccountId') }})
    
