from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Voice:
    r"""Voice
    Description of the voice.
    """
    
    additional_language_codes: Optional[List[LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalLanguageCodes') }})
    gender: Optional[GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Gender') }})
    id: Optional[VoiceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    language_code: Optional[LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageCode') }})
    language_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LanguageName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    supported_engines: Optional[List[EngineEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedEngines') }})
    
