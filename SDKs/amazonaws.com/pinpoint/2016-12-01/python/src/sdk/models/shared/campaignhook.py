from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mode_enum


@dataclass_json
@dataclass
class CampaignHook:
    lambda_function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaFunctionName' }})
    mode: Optional[mode_enum.ModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebUrl' }})
    
