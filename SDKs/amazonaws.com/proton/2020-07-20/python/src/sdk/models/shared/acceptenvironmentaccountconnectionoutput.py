from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcceptEnvironmentAccountConnectionOutput:
    environment_account_connection: EnvironmentAccountConnection = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentAccountConnection') }})
    
