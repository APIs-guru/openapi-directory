from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum
from . import gender_enum
from . import voiceid_enum
from . import languagecode_enum
from . import engine_enum


@dataclass_json
@dataclass
class Voice:
    additional_language_codes: Optional[List[languagecode_enum.LanguageCodeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalLanguageCodes' }})
    gender: Optional[gender_enum.GenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Gender' }})
    id: Optional[voiceid_enum.VoiceIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    language_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    supported_engines: Optional[List[engine_enum.EngineEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedEngines' }})
    
