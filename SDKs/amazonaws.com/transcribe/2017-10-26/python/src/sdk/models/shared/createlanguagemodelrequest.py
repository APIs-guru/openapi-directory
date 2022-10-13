from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import basemodelname_enum
from . import inputdataconfig
from . import clmlanguagecode_enum
from . import tag


@dataclass_json
@dataclass
class CreateLanguageModelRequest:
    base_model_name: basemodelname_enum.BaseModelNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaseModelName' }})
    input_data_config: inputdataconfig.InputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    language_code: clmlanguagecode_enum.ClmLanguageCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
