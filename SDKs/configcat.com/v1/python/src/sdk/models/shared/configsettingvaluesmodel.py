from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConfigSettingValuesModel:
    config: Optional[ConfigModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[EnvironmentModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    setting_values: Optional[List[ConfigSettingValueModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingValues') }})
    
