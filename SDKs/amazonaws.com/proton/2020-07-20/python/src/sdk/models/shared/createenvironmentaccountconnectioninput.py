from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateEnvironmentAccountConnectionInput:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    environment_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentName' }})
    management_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementAccountId' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
