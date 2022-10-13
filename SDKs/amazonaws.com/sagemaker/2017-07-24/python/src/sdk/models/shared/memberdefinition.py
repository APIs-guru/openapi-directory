from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cognitomemberdefinition
from . import oidcmemberdefinition


@dataclass_json
@dataclass
class MemberDefinition:
    cognito_member_definition: Optional[cognitomemberdefinition.CognitoMemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CognitoMemberDefinition' }})
    oidc_member_definition: Optional[oidcmemberdefinition.OidcMemberDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OidcMemberDefinition' }})
    
