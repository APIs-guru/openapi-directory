from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CallAnalyticsJobSettings:
    r"""CallAnalyticsJobSettings
    Provides optional settings for the <code>CallAnalyticsJob</code> operation. 
    """
    
    content_redaction: Optional[ContentRedaction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentRedaction') }})
    language_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageModelName') }})
    language_options: Optional[List[LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageOptions') }})
    vocabulary_filter_method: Optional[VocabularyFilterMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterMethod') }})
    vocabulary_filter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyFilterName') }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VocabularyName') }})
    
