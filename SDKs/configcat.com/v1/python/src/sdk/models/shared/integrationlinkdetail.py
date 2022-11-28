from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntegrationLinkDetail:
    config: Optional[ConfigModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    environment: Optional[EnvironmentModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    product: Optional[ProductModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    setting: Optional[SettingDataModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setting') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
