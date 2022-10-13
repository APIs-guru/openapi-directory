from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import configmodel
from . import environmentmodel
from . import productmodel
from . import settingdatamodel


@dataclass_json
@dataclass
class IntegrationLinkDetail:
    config: Optional[configmodel.ConfigModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    environment: Optional[environmentmodel.EnvironmentModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    product: Optional[productmodel.ProductModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    read_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnly' }})
    setting: Optional[settingdatamodel.SettingDataModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setting' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
