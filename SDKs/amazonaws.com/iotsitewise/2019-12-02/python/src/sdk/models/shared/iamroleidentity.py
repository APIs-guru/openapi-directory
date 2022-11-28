from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IamRoleIdentity:
    r"""IamRoleIdentity
    Contains information about an Identity and Access Management role. For more information, see <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html\">IAM roles</a> in the <i>IAM User Guide</i>.
    """
    
    arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
