from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CognitoConfig:
    r"""CognitoConfig
    Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href=\"https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html\"> Amazon Cognito user pool</a>.
    """
    
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientId') }})
    user_pool: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPool') }})
    
