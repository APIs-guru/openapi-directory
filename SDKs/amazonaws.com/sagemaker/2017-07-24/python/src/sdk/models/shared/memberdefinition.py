from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MemberDefinition:
    r"""MemberDefinition
    Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
    """
    
    cognito_member_definition: Optional[CognitoMemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CognitoMemberDefinition') }})
    oidc_member_definition: Optional[OidcMemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OidcMemberDefinition') }})
    
