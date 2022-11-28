from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CognitoMemberDefinition:
    r"""CognitoMemberDefinition
    Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    user_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserGroup') }})
    user_pool: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPool') }})
    
