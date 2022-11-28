from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TranslationModelMetadata:
    r"""TranslationModelMetadata
    Model metadata that is specific to translation.
    """
    
    base_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseModel') }})
    source_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceLanguageCode') }})
    target_language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetLanguageCode') }})
    
