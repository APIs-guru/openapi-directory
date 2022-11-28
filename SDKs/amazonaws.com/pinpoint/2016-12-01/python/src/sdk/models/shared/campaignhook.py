from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignHook:
    r"""CampaignHook
    Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign.
    """
    
    lambda_function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaFunctionName') }})
    mode: Optional[ModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Mode') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebUrl') }})
    
