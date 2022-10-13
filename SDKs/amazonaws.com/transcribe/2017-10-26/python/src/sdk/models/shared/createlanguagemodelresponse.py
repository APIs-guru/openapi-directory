from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import basemodelname_enum
from . import inputdataconfig
from . import clmlanguagecode_enum
from . import modelstatus_enum


@dataclass_json
@dataclass
class CreateLanguageModelResponse:
    base_model_name: Optional[basemodelname_enum.BaseModelNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseModelName' }})
    input_data_config: Optional[inputdataconfig.InputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: Optional[clmlanguagecode_enum.ClmLanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    model_status: Optional[modelstatus_enum.ModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelStatus' }})
    
