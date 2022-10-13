from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contentredaction
from . import languagecode_enum
from . import vocabularyfiltermethod_enum


@dataclass_json
@dataclass
class CallAnalyticsJobSettings:
    content_redaction: Optional[contentredaction.ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentRedaction' }})
    language_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageModelName' }})
    language_options: Optional[List[languagecode_enum.LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageOptions' }})
    vocabulary_filter_method: Optional[vocabularyfiltermethod_enum.VocabularyFilterMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterMethod' }})
    vocabulary_filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyFilterName' }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    
