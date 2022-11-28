from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsLambdaFunctionLayer:
    r"""AwsLambdaFunctionLayer
    An Lambda layer.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeSize') }})
    
