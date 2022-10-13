from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configmodel
from . import environmentmodel
from . import configsettingvaluemodel


@dataclass_json
@dataclass
class ConfigSettingValuesModel:
    config: Optional[configmodel.ConfigModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    environment: Optional[environmentmodel.EnvironmentModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    setting_values: Optional[List[configsettingvaluemodel.ConfigSettingValueModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingValues' }})
    
