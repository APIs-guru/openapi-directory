from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateLanguageModelResponse:
    base_model_name: Optional[BaseModelNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaseModelName') }})
    input_data_config: Optional[InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    language_code: Optional[ClmLanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelName') }})
    model_status: Optional[ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelStatus') }})
    
