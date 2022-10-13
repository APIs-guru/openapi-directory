from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import outputformat_enum


@dataclass_json
@dataclass
class GenerateTemplateRequest:
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    template_format: Optional[outputformat_enum.OutputFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateFormat' }})
    
