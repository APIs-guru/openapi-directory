from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ModelSettings:
    r"""ModelSettings
    The object used to call your custom language model to your transcription job.
    """
    
    language_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageModelName') }})
    
