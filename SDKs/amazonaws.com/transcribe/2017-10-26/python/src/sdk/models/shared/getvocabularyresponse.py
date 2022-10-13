from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import languagecode_enum
from . import vocabularystate_enum


@dataclass_json
@dataclass
class GetVocabularyResponse:
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DownloadUri' }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    language_code: Optional[languagecode_enum.LanguageCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LanguageCode' }})
    last_modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    vocabulary_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyName' }})
    vocabulary_state: Optional[vocabularystate_enum.VocabularyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VocabularyState' }})
    
