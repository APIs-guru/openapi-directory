from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lambdaconfiguration
from . import snsconfiguration


@dataclass_json
@dataclass
class Action:
    lambda_configuration: Optional[lambdaconfiguration.LambdaConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaConfiguration' }})
    sns_configuration: Optional[snsconfiguration.SnsConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SNSConfiguration' }})
    
