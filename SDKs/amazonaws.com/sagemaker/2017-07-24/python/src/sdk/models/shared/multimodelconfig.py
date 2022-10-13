from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modelcachesetting_enum


@dataclass_json
@dataclass
class MultiModelConfig:
    model_cache_setting: Optional[modelcachesetting_enum.ModelCacheSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelCacheSetting' }})
    
