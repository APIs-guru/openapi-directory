from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import languagemodel


@dataclass_json
@dataclass
class DescribeLanguageModelResponse:
    language_model: Optional[languagemodel.LanguageModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageModel' }})
    
