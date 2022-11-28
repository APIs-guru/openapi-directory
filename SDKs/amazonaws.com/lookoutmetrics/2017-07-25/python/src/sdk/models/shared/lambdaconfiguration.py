from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaConfiguration:
    r"""LambdaConfiguration
    Contains information about a Lambda configuration.
    """
    
    lambda_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaArn') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    
