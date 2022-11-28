from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Action:
    r"""Action
    A configuration that specifies the action to perform when anomalies are detected.
    """
    
    lambda_configuration: Optional[LambdaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaConfiguration') }})
    sns_configuration: Optional[SnsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SNSConfiguration') }})
    
